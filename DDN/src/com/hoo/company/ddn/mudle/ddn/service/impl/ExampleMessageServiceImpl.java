package com.hoo.company.ddn.mudle.ddn.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.gilight.framework.dp.DaoSupport;

import com.hoo.company.ddn.mudle.ddn.dao.IExampleMessageDao;
import com.hoo.company.ddn.mudle.ddn.entity.ExampleMessage;
import com.hoo.company.ddn.mudle.ddn.service.IExampleMessageService;
import com.hoo.company.ddn.util.DateUtils;

@Service("exampleMessage")
public class ExampleMessageServiceImpl implements IExampleMessageService {

	@Resource
	DaoSupport daoSupport;
	@Resource
	IExampleMessageDao exampleMessageDao;

	public ExampleMessage add(ExampleMessage message) throws SecurityException, NoSuchFieldException {
		message.setCreateTime(DateUtils.getNow());
		return daoSupport.insert(message);
	}
    
	
	public ExampleMessage delete(ExampleMessage message) {
		return daoSupport.delete(message);
	}    

	public List<ExampleMessage> queryLtByExampleId(ExampleMessage message) {
		return exampleMessageDao.queryLtByExampleId(message);
	}

}
