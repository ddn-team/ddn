package com.hoo.company.ddn.mudle.ddn.service;

import java.util.List;

import com.hoo.company.ddn.mudle.ddn.entity.DdnEncyclopedias;

public interface IDdnEncyclopediasService {
	/**
	 * 保存百科
	 * @param encyclopedias
	 * @return
	 * @throws NoSuchFieldException 
	 * @throws SecurityException 
	 */
	public DdnEncyclopedias add(DdnEncyclopedias encyclopedias) throws SecurityException, NoSuchFieldException;

	/**
	 * 修改百科
	 * @param encyclopedias
	 * @return
	 */
	public DdnEncyclopedias update(DdnEncyclopedias encyclopedias);
	
	/**
	 * 删除百科
	 * @param encyclopedias
	 * @return
	 */
	public DdnEncyclopedias delete(DdnEncyclopedias encyclopedias);
	
	/**
	 * 查询百科【简版】
	 * @param encyclopedias
	 * @return
	 */
	public List<DdnEncyclopedias> queryLt4Short(DdnEncyclopedias encyclopedias);

	/**
	 * 查询百科
	 * @param encyclopedias {id:""}
	 * @return
	 */
	public DdnEncyclopedias queryT(DdnEncyclopedias encyclopedias);
}
