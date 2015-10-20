package com.hoo.company.ddn.rpc.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hoo.company.ddn.mudle.ddn.entity.DdnEncyclopedias;
import com.hoo.company.ddn.mudle.ddn.service.IDdnEncyclopediasService;
import com.hoo.company.ddn.rpc.IDdnEncyclopediasRpc;

@Service("encyclopediasRpc") 
public class DdnEncyclopediasRpcImpl implements IDdnEncyclopediasRpc {
	
	@Resource
	IDdnEncyclopediasService encyclopediasService;
	
	public boolean add(DdnEncyclopedias encyclopedias) throws SecurityException, NoSuchFieldException {
		return encyclopediasService.add(encyclopedias) != null;
	}

	public boolean delete(DdnEncyclopedias encyclopedias) {
		return encyclopediasService.delete(encyclopedias) != null;
	}

	public DdnEncyclopedias queryT(DdnEncyclopedias encyclopedias) {
		return encyclopediasService.queryT(encyclopedias);
	}

	/**
	 * 修改 为 差异化修改
	 */
	public boolean update(DdnEncyclopedias encyclopedias) {
		DdnEncyclopedias temp = queryT(encyclopedias);
		if(temp == null){ return false; }
		if(encyclopedias.getAnswer() != null)  { temp.setAnswer(encyclopedias.getAnswer()); }
		if(encyclopedias.getQuestion() != null){ temp.setQuestion(encyclopedias.getQuestion());}
		return encyclopediasService.update(temp) != null;
	}

}
