package com.hoo.company.ddn.mudle.ddn.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.gilight.framework.dp.DaoSupport;

import com.hoo.company.ddn.mudle.ddn.entity.DdnExample;
import com.hoo.company.ddn.mudle.ddn.service.IDdnExamleService;
import com.hoo.company.ddn.util.DateUtils;
import com.hoo.company.ddn.util.SessionUtils;

@Service("ddnExamleService")
public class DdnExamleServiceImpl implements IDdnExamleService {

	@Resource
	DaoSupport daoSupport;
	
	public DdnExample add(DdnExample example) throws SecurityException, NoSuchFieldException {
		example.setCreateTime(DateUtils.getNow());
		//example.setCreateUserId(SessionUtils.getUser().getId());
		return daoSupport.insert(example);
	}

	public DdnExample delete(DdnExample example) {
		return daoSupport.deleteById(example.getId(), DdnExample.class);
	}

	public DdnExample update(DdnExample example) {
		return null;
	}

}
