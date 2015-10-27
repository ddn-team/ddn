package com.hoo.company.ddn.rpc.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hoo.company.ddn.mudle.base.entity.BaseDictionaries;
import com.hoo.company.ddn.mudle.base.service.IBaseDictionariesService;
import com.hoo.company.ddn.rpc.IBaseDictionariesRpc;

@Service("baseDictionariesRpc")
public class BaseDictionariesRpcImpl implements IBaseDictionariesRpc {

	@Resource
	IBaseDictionariesService dictionariesService;
	
	public List<BaseDictionaries> queryLtByBelongType(String belongType) {
		return dictionariesService.queryLtByBelongType(belongType);
	}

}
