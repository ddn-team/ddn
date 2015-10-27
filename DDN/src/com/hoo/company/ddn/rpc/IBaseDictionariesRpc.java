package com.hoo.company.ddn.rpc;

import java.util.List;

import com.hoo.company.ddn.mudle.base.entity.BaseDictionaries;

/**
 * 字典表相关RPC
 * @author hank
 *
 */
public interface IBaseDictionariesRpc {

	/**
	 * 根据所述类型 查询字典表集合
	 * @param belongType
	 * @return
	 */
	public List<BaseDictionaries> queryLtByBelongType(String belongType);
}
