package com.hoo.company.ddn.rpc;

import java.util.List;


import com.hoo.company.ddn.mudle.base.entity.BaseDictionaries;

public interface IDictionariesRpc {
	
	/**
	 * 初始化字典表原始数据【由实施人员操作,且只会初始化一次】
	 */
	public void initDictionaries();
	
	/**
	 * 通过所属类型获取字典数据集合
	 * @param belongType
	 * @return
	 */
	public List<BaseDictionaries> queryLtByBelongType(String belongType);
	
}
