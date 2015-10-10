package com.hoo.company.ddn.mudle.base.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 用户实体类
 * 
 * @author hank
 * 
 */
@SuppressWarnings("serial")
@Entity
@Table(name = "BASE_USER")
public class BaseUser implements Serializable {
	@Id
	private String id;
	/*** 用户名(登录名) */
	@Column(name = "USER_NAME")
	private String userName;
	/*** 用户昵称(真实姓名)*/
	@Column(name = "NICK_NAME")
	private String nickName;
	/*** 用户电话 */
	@Column(name = "TEL_PHONE")
	private String telPhone;
	/*** 用户邮箱 */
	@Column(name = "EMAIL")
	private String email;
	/*** 用户登录密码(MD5加密) */
	@Column(name = "USER_PWD")
	private String userPwd;
	/*** 邀请码*/
	@Column(name = "INVITATION_CODE")
	private String invitationCode;
	/*** 创建(注册)时间*/
	@Column(name = "CREATE_TIME")
	private String createTime;

	public String getId() {
		return id;
	}

	public String getUserName() {
		return userName;
	}

	public String getNickName() {
		return nickName;
	}

	public String getTelPhone() {
		return telPhone;
	}

	public String getEmail() {
		return email;
	}

	public String getUserPwd() {
		return userPwd;
	}

	public String getInvitationCode() {
		return invitationCode;
	}

	public String getCreateTime() {
		return createTime;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public void setNickName(String nickName) {
		this.nickName = nickName;
	}

	public void setTelPhone(String telPhone) {
		this.telPhone = telPhone;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setUserPwd(String userPwd) {
		this.userPwd = userPwd;
	}

	public void setInvitationCode(String invitationCode) {
		this.invitationCode = invitationCode;
	}

	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
}
