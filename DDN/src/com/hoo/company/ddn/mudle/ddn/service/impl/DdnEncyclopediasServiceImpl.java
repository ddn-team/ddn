package com.hoo.company.ddn.mudle.ddn.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.gilight.framework.dp.DaoSupport;

import com.hoo.company.ddn.mudle.ddn.entity.DdnEncyclopedias;
import com.hoo.company.ddn.mudle.ddn.service.IDdnEncyclopediasService;
import com.hoo.company.ddn.util.DateUtils;

@Service("encyclopediasService")
public class DdnEncyclopediasServiceImpl implements IDdnEncyclopediasService {
	
	@Resource
	private DaoSupport daoSupport;
	
	public DdnEncyclopedias add(DdnEncyclopedias encyclopedias) throws SecurityException, NoSuchFieldException {
		encyclopedias.setCreateTime(DateUtils.getNow());
		//encyclopedias.setCreateUserId(SessionUtils.getUser().getId());
		return daoSupport.insert(encyclopedias);
	}

	public DdnEncyclopedias delete(DdnEncyclopedias encyclopedias) {
		return daoSupport.delete(encyclopedias);
	}
	
	//问题列表
	public List<DdnEncyclopedias> queryLt4Short(DdnEncyclopedias encyclopedias) {
		
		return null;
	}

	public DdnEncyclopedias queryT(DdnEncyclopedias encyclopedias) {
		return daoSupport.getById(encyclopedias.getId(), DdnEncyclopedias.class);
	}

	public DdnEncyclopedias update(DdnEncyclopedias encyclopedias) {
		encyclopedias.setLastUpdateTime(DateUtils.getNow());
		return daoSupport.update(encyclopedias);
	}

}
