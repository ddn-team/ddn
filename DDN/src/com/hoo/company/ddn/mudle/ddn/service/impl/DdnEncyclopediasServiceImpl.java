package com.hoo.company.ddn.mudle.ddn.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.gilight.framework.dp.DaoSupport;
import cn.gilight.framework.dp.model.Page;

import com.hoo.company.ddn.mudle.ddn.dao.IDdnEncyclopediasDao;
import com.hoo.company.ddn.mudle.ddn.entity.DdnEncyclopedias;
import com.hoo.company.ddn.mudle.ddn.service.IDdnEncyclopediasService;
import com.hoo.company.ddn.util.DateUtils;

@Service("ddnEncyclopediasService")
public class DdnEncyclopediasServiceImpl implements IDdnEncyclopediasService {
	
	@Resource
	private DaoSupport daoSupport;
	@Resource
	private IDdnEncyclopediasDao encyclopediasDao;
	
	public DdnEncyclopedias add(DdnEncyclopedias encyclopedias) throws SecurityException, NoSuchFieldException {
		encyclopedias.setCreateTime(DateUtils.getNow());
		//encyclopedias.setCreateUserId(SessionUtils.getUser().getId());
		return daoSupport.insert(encyclopedias);
	}

	public DdnEncyclopedias delete(DdnEncyclopedias encyclopedias) {
		return daoSupport.delete(encyclopedias);
	}

	public DdnEncyclopedias queryT(DdnEncyclopedias encyclopedias) {
		return daoSupport.getById(encyclopedias.getId(), DdnEncyclopedias.class);
	}

	public DdnEncyclopedias update(DdnEncyclopedias encyclopedias) {
		encyclopedias.setLastUpdateTime(DateUtils.getNow());
		return daoSupport.update(encyclopedias);
	}

	
	public Page queryLmPage(Page page, DdnEncyclopedias encyclopedias) {
		encyclopediasDao.queryLtPage(page,encyclopedias);
		return page;
	}

	
}
