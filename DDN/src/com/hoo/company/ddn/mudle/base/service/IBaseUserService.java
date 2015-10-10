package com.hoo.company.ddn.mudle.base.service;

import java.security.NoSuchAlgorithmException;

import com.hoo.company.ddn.mudle.base.entity.BaseUser;

/**
 * 基础模块--用户信息服务层接口
 * @author hank
 *
 */
public interface IBaseUserService {
	/**
	 * 添加新用户
	 * @param user
	 * @return
	 * @throws NoSuchFieldException 
	 * @throws SecurityException 
	 */
	public BaseUser add(BaseUser user) throws SecurityException, NoSuchFieldException;
	
	/**
	 * 修改用户信息
	 * @param user
	 * @return
	 * @throws NoSuchAlgorithmException
	 */
	public BaseUser update(BaseUser user) throws NoSuchAlgorithmException;
	
	/**
	 * 查询用户
	 * @param user （当前 userName 和  id 为查询条件）
	 * @return
	 */
	public BaseUser queryT(BaseUser user);
	
	
}
