package com.hoo.company.ddn.rpc;


import com.hoo.company.ddn.mudle.ddn.entity.DdnEncyclopedias;

public interface IDdnEncyclopediasRpc {
	
	/**
	 * 添加百科信息
	 * @throws NoSuchFieldException 
	 * @throws SecurityException 
	 */
	public boolean add(DdnEncyclopedias encyclopedias) throws SecurityException, NoSuchFieldException;
	/**
	 * 修改百科信息
	 * @param encyclopedias
	 * @return
	 */
	public boolean update(DdnEncyclopedias encyclopedias);
	
	/**
	 * 删除百科信息
	 * @param encyclopedias
	 * @return
	 */
	public boolean delete(DdnEncyclopedias encyclopedias);
	
	/**
	 * 查询单个百科信息
	 * @param encyclopedias
	 * @return
	 */
	public DdnEncyclopedias queryT(DdnEncyclopedias encyclopedias);
}
