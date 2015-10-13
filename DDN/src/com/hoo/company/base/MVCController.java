package com.hoo.company.base;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hoo.company.ddn.mudle.base.model.DdnUser;
import com.hoo.company.ddn.util.SessionUtils;

import cn.gilight.framework.mvc.CoreController;
import cn.gilight.framework.mvc.model.Ajax;

@Controller
public class MVCController extends CoreController {
	
	
	@Override
	@ResponseBody
	@RequestMapping("controller/extcore")
	public ExtAjax doHandler(@RequestParam("server") String server,
							@RequestParam("method") String methodname,
							@RequestParam("params") String params){
		Ajax ajax = super.doHandler(server, methodname, params);
		ExtAjax ea = new ExtAjax();
		ea.setCode(ajax.getCode());
		ea.setResult(ajax.getResult());
		ea.setUser(SessionUtils.getUser());
		return ea;
	}
	
	
	public static class ExtAjax extends Ajax{
		private DdnUser user;

		public DdnUser getUser() {
			return user;
		}

		public void setUser(DdnUser user) {
			this.user = user;
		}
		
	}
}
