package com.hoo.company.ddn.mudle.ddn.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.gilight.framework.dp.DaoSupport;
import cn.gilight.framework.dp.model.Page;

import com.hoo.company.ddn.mudle.ddn.dao.IDdnExampleDao;
import com.hoo.company.ddn.mudle.ddn.entity.DdnExample;
import com.hoo.company.ddn.mudle.ddn.service.IDdnExamleService;
import com.hoo.company.ddn.util.DateUtils;

@Service("ddnExamleService")
public class DdnExamleServiceImpl implements IDdnExamleService {

	@Resource
	DaoSupport daoSupport;
	@Resource
	IDdnExampleDao exampleDao;
	
	public DdnExample add(DdnExample example) throws SecurityException, NoSuchFieldException {
		example.setCreateTime(DateUtils.getNow());
		//example.setCreateUserId(SessionUtils.getUser().getId());
		return daoSupport.insert(example);
	}

	public DdnExample delete(DdnExample example) {
		return daoSupport.deleteById(example.getId(), DdnExample.class);
	}
	
	public DdnExample update(DdnExample example) {
		return daoSupport.update(example);
	}

	public DdnExample queryById(String id) {
		return daoSupport.getById(id, DdnExample.class);
	}

	public Page queryLmPage(Page page,DdnExample example){
		exampleDao.queryLmPage(page, example);
		return page;
	}

	public List<Map<String, Object>> queryLmGroupTime() {
		return exampleDao.queryLmGroupTime();
	}
}
