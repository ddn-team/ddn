package com.hoo.company.ddn.mudle.base.model;

/**
 * 当前系统用户模型
 * @author hank
 *
 */
public class DdnUser {
	/*** 用户名 */
	private String username;
	/*** 昵称*/
	private String nickname;
	/*** 密码*/
	private String password;
	
	public String getUsername() {
		return username;
	}
	public String getNickname() {
		return nickname;
	}
	public String getPassword() {
		return password;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
