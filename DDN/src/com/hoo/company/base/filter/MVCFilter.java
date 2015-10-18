package com.hoo.company.base.filter;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.util.StringUtils;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.hoo.company.ddn.manager.SessionManager;
import com.hoo.company.ddn.util.SessionUtils;

/**
 * mvc访问过滤器
 * @author hank
 *
 */
public class MVCFilter implements Filter {

	//private SessionManager sessionManager = null;
	private String unloginRequests = null;
	// 增加 server\methods 对应关系,可以放开ajax登录认证问题(即不登录可访问)
	private Map<String, Map<String, Boolean>> allowUnlogin = null;

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain fc) throws IOException, ServletException {

		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;

		SessionManager.getInstance().setRequest(req);
		SessionManager.getInstance().setResponse(res);
		
		// 在这里进行功能权限过滤
		/*String server = req.getParameter("server"), method = req .getParameter("method");
		if (allowUnlogin.containsKey(server) && allowUnlogin.get(server).containsKey(method)) {
			fc.doFilter(req, res);
			return;
		}
		//如果是查询方法-均放开?
		if(method.startsWith("query")){
			fc.doFilter(req, res);return;
		}
		
		if (!SessionUtils.isLogin()) {
			String path = req.getContextPath();
			String basePath = req.getScheme() + "://" + req.getServerName() + ":" + req.getServerPort() + path + "/";
			res.sendRedirect(basePath);
		} else {
			fc.doFilter(request, response);
		}*/
		//TODO 测试  暂不添加登录过滤
		fc.doFilter(request, response);
	}

	public void init(FilterConfig config) throws ServletException {
		//sessionManager = SessionManager.getInstance();

		allowUnlogin = new HashMap<String, Map<String, Boolean>>();
		unloginRequests = config.getInitParameter("unloginRequests");
		if (!StringUtils.isEmpty(unloginRequests)) {
			JSONObject json = JSONObject.parseObject(unloginRequests);
			for (String key : json.keySet()) {
				Map<String, Boolean> m = new HashMap<String, Boolean>();
				JSONArray array = json.getJSONArray(key);
				for (int i = 0, len = array.size(); i < len; i++) {
					m.put(array.getString(i), true);
				}
				allowUnlogin.put(key, m);
			}
		}
	}

	public void destroy() {

	}
}
