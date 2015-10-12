package com.hoo.company.ddn.manager;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Session管理类
 * @author hanq
 */
public class SessionManager {
	private static SessionManager single;
	
	private static ThreadLocal<HttpServletRequest>   threadRequest = null;
	private static ThreadLocal<HttpServletResponse> threadResponse = null;
	
	
	private SessionManager(){
		 threadRequest = new ThreadLocal<HttpServletRequest>();
		threadResponse = new ThreadLocal<HttpServletResponse>();
	}
	
	public static SessionManager getInstance(){
		synchronized (SessionManager.class) {
			if(single == null){ single = new SessionManager();}
		}
		return single;
	}
	
	
	public HttpServletRequest getReq(){
		return threadRequest.get();
	}
	
	public void setRequest(HttpServletRequest value){
		threadRequest.set(value);
	}
	
	public void setResponse(HttpServletResponse value){
		threadResponse.set(value);
	}
	
	/**
	 * 获取session 如果没有则为null
	 * @return
	 */
	public HttpSession getSession(){
		return getSession(false);
	}
	
	/**
	 * 获取session
	 * @param arg0  为true时,如果session没有则创建一个
	 * @return
	 */
	public HttpSession getSession(boolean arg0){
		return threadRequest.get().getSession(arg0);
	}
	
	/**
	 * 获取session,默认创建一个
	 * @return
	 */
	public HttpSession get(){
		return getSession(true);
	}
	
}
