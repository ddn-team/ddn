package com.hoo.company.ddn.mudle.common.impl;

import java.security.NoSuchAlgorithmException;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.gilight.commons.EncryptionUtils;

import com.hoo.company.ddn.exception.UserNotFoundException;
import com.hoo.company.ddn.exception.ValidateFailException;
import com.hoo.company.ddn.mudle.base.entity.BaseUser;
import com.hoo.company.ddn.mudle.base.model.DdnUser;
import com.hoo.company.ddn.mudle.base.service.IBaseUserService;
import com.hoo.company.ddn.mudle.common.ICommonService;

/**
 * 通用服务层实现类
 * @author hank
 *
 */
@Service("commonRPC")
public class CommonServiceImpl implements ICommonService{

	@Resource
	IBaseUserService userService;
	
	public boolean login(DdnUser user) throws UserNotFoundException, ValidateFailException {
		BaseUser bUser = new BaseUser();
	    bUser.setUserName(user.getUsername());
	    bUser = userService.queryT(bUser);
	    if(null == bUser){ throw new UserNotFoundException("该用户不存在");}
	    try {
			if(bUser.getUserPwd().equals(EncryptionUtils.toMD5(user.getPassword()))){
				return true;
			}
			throw new ValidateFailException("密码凭证错误");
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		return false;
	}

	public boolean register(String username, String password, String invitationCode) throws Exception {
		BaseUser bUser = new BaseUser();
	    bUser.setUserName(username);
	    BaseUser tempUser = userService.queryT(bUser);
	    if(null != tempUser){ throw new Exception("该账号已被占用.");}
		//TODO 查询邀请码是否真实 invitationCode
	    try{
	    	bUser.setUserPwd(EncryptionUtils.toMD5(password));
	    } catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
			throw new NoSuchAlgorithmException("加密过程出现错误.");
		}
	    bUser = userService.add(bUser);
		return null != bUser;
	}

	
}
