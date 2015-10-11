package com.hoo.company.ddn.mudle.base.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.hoo.company.ddn.mudle.base.entity.BaseDictionaries;

/**
 * 基础-字典表dao层接口
 * @author hank
 */
public interface IBaseDictionariesDao {
	
	/**
	 * 根据某个BaseDictionaries对象中的属性匹配查找对应的相似对象集合
	 * @param dictionaries 暂支持: {belongTyoe:"",typeCode:"",id:""}
	 * @return 字典集合
	 */
	public List<BaseDictionaries> queryLt(@Param("dic")BaseDictionaries dictionaries);
	
	/**
	 * 
	 根据某个BaseDictionaries对象中的属性匹配查找对应的相似对象集合数量
	 * @param dictionaries 暂支持: {belongTyoe:"",typeCode:"",id:""}
	 * @return 字典集合数量
	 */
	public int getCount(@Param("dic")BaseDictionaries dictionaries);
}
