package com.hoo.company.ddn.util;

import com.hoo.company.ddn.Constant;
import com.hoo.company.ddn.manager.SessionManager;
import com.hoo.company.ddn.mudle.base.model.DdnUser;

/**
 * session管理类
 * @author hank
 */
public class SessionUtils {
	
	/**
	 * 是否登陆
	 * @return
	 */
	public static boolean isLogin(){
		return SessionManager.getInstance().get() != null && getUser() != null;
	}
	
	/**
	 * 获取登陆用户(未登陆前为null)
	 * @return
	 */
	public static DdnUser getUser() {
		return (DdnUser) SessionManager.getInstance().get().getAttribute(Constant.KEY_LOGIN_SESSION_USER);
	}
	
	/*** 得到系统默认支持的当前用户 */
	public static void setUser(DdnUser user){
		 SessionManager.getInstance().get().setAttribute(Constant.KEY_LOGIN_SESSION_USER,user);
	}
	
	/*** 清除(注销)用户 */
	public static void clearUser(){
		SessionManager.getInstance().get().removeAttribute(Constant.KEY_LOGIN_SESSION_USER);
	}
	
}
