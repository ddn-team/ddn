package com.hoo.company.ddn.mudle.base.service.impl;

import java.security.NoSuchAlgorithmException;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import cn.gilight.commons.EncryptionUtils;
import cn.gilight.framework.dp.DaoSupport;

import com.hoo.company.ddn.mudle.base.dao.IBaseUserDao;
import com.hoo.company.ddn.mudle.base.entity.BaseUser;
import com.hoo.company.ddn.mudle.base.service.IBaseUserService;

@Service("baseUserService")
public class BaseUserServiceImpl implements IBaseUserService {

	@Resource
	private IBaseUserDao userDao;
	
	@Resource
	private DaoSupport daoSupport;
	
	public BaseUser add(BaseUser user) throws SecurityException, NoSuchFieldException {
		if(user != null && !StringUtils.isEmpty(user.getUserPwd())){
			try {
				user.setUserName(user.getTelPhone());//TODO 用户登录名即为其电话号码
				user.setUserPwd(EncryptionUtils.toMD5(user.getUserPwd()));
			} catch (NoSuchAlgorithmException e) {
				e.printStackTrace();
			}
		}
		return daoSupport.insert(user);
	}

	public BaseUser queryT(BaseUser user) {
		List<BaseUser> list = userDao.queryT(user);
		return (list == null || list.isEmpty()) ? null : list.get(0);
	}

	public BaseUser update(BaseUser user) throws NoSuchAlgorithmException {
		
		BaseUser tempUser = queryT(user);
		if(null != tempUser && user != null){
			if(user.getUserPwd() != null){
				tempUser.setUserPwd(EncryptionUtils.toMD5(user.getUserPwd()));
			}
			if(user.getEmail() != null){
				tempUser.setEmail(user.getEmail());
			}
			if(user.getTelPhone() != null){
				tempUser.setTelPhone(user.getTelPhone());
			}
			if(user.getNickName() != null){
				tempUser.setNickName(user.getNickName());
			}
			//TODO 设置登录名为手机号
			tempUser.setUserName(tempUser.getTelPhone());
		}
		return daoSupport.update(tempUser);
	}

}
