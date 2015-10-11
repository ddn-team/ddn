package com.hoo.company.ddn.rpc;

import com.hoo.company.ddn.exception.UserNotFoundException;
import com.hoo.company.ddn.exception.ValidateFailException;
import com.hoo.company.ddn.mudle.base.model.DdnUser;

/**
 * 通用功能服务层接口
 * @author hank
 *
 */
public interface ICommonRpc {
	
	/**
	 * 登录,接收参数:
	 * @param user  { username:"用户名",password:"密码" }
	 * @return
	 * @throws UserNotFoundException 
	 * @throws ValidateFailException 
	 */
	public boolean login(DdnUser user) throws UserNotFoundException, ValidateFailException;
	
	/**
	 * 注册
	 * @param username 账户名称
	 * @param password 密码
	 * @param invitationCode 邀请码
	 * @return
	 * @throws Exception 
	 */
	public boolean register(String username,String password,String invitationCode) throws Exception;

	
}
