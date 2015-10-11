package com.hoo.company.ddn.mudle.base.service;

import java.util.List;

import com.hoo.company.ddn.mudle.base.entity.BaseDictionaries;

public interface IBaseDictionariesService {
	
	/**
	 * 根据所属类型查找对应字典数据,以sortnum顺序排列
	 * @param belongType
	 * @return 字典集合
	 */
	public List<BaseDictionaries> queryLtByBelongType(String belongType);
	
	/**
	 * 添加一个字典对象
	 * @param dictionaries
	 * @return
	 * @throws NoSuchFieldException 
	 * @throws SecurityException 
	 */
	public BaseDictionaries add(BaseDictionaries dictionaries) throws SecurityException, NoSuchFieldException;
	
	/**
	 * 添加多个字典对象
	 * @param dictionaries
	 * @return
	 * @throws NoSuchFieldException 
	 * @throws SecurityException 
	 */
	public void adds(List<BaseDictionaries> dictionaries) throws SecurityException, NoSuchFieldException;
	
	/**
	 * 获取符合dictionaries对象的集合数量
	 * @param dictionaries 暂支持: {}
	 * @return
	 */
	public long getCount(BaseDictionaries dictionaries);
}
