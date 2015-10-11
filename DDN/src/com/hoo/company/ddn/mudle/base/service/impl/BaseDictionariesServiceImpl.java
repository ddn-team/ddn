package com.hoo.company.ddn.mudle.base.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.gilight.framework.dp.DaoSupport;

import com.hoo.company.ddn.mudle.base.dao.IBaseDictionariesDao;
import com.hoo.company.ddn.mudle.base.entity.BaseDictionaries;
import com.hoo.company.ddn.mudle.base.service.IBaseDictionariesService;

@Service("dictionariesService")
public class BaseDictionariesServiceImpl implements IBaseDictionariesService {

	@Resource
	private DaoSupport daoSupport;
	
	@Resource
	IBaseDictionariesDao dicDao;
	
	public List<BaseDictionaries> queryLtByBelongType(String belongType) {
		BaseDictionaries dictionaries = new BaseDictionaries();
		dictionaries.setBelongType(belongType);
		return dicDao.queryLt(dictionaries);
	}

	public BaseDictionaries add(BaseDictionaries dictionaries) throws SecurityException, NoSuchFieldException {
		return daoSupport.insert(dictionaries);
	}

	public long getCount(BaseDictionaries dictionaries) {
		return dicDao.getCount(dictionaries);
	}

	public void adds(List<BaseDictionaries> dictionaries) throws SecurityException, NoSuchFieldException {
		daoSupport.inserts(dictionaries);
	}

}
