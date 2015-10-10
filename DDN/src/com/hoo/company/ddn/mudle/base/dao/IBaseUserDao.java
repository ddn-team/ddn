package com.hoo.company.ddn.mudle.base.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.hoo.company.ddn.mudle.base.entity.BaseUser;

/**
 * 基础模块--用户dao层接口
 * @author hank
 *
 */
public interface IBaseUserDao {
	
	/**
	 * 查询用户
	 * @param user
	 * @return
	 */
	public List<BaseUser> queryT(@Param("user")BaseUser user);
}
