package com.hoo.company.ddn.mudle.contacts.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 留言实体类
 * @author hank
 * @version 1.0
 * @version 1.1 融合案例预约留言
 */
@SuppressWarnings("serial")
@Entity
@Table(name="CONTACTS_MESSAGE")
public class ContactsMessage implements Serializable{
	
	@Id
	private String id;
	/*** 姓名 */
	@Column(name="NAME")
	private String name;
	/*** 邮箱 */
	@Column(name="EMAIL")
	private String email;
	/*** 手机 */
	@Column(name="TELPHONE")
	private String telphone;
	/*** 留言内容 */
	@Column(name="CONTENT")
	private String content;
	/*** 留言时间(yyyy-MM-dd HH:mm:ss) */
	@Column(name="CREATE_TIME")
	private String createTime;
	/*** 留言来源 */
	@Column(name="MESSAGE_FROM")
	private String messageFrom;
	/*** 留言对象(留言给谁的)ID  */
	@Column(name="TO_USER_ID")
	private String toUserId;
	
	public String getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public String getEmail() {
		return email;
	}
	public String getTelphone() {
		return telphone;
	}
	public String getContent() {
		return content;
	}
	
	public String getCreateTime() {
		return createTime;
	}
	public String getToUserId() {
		return toUserId;
	}
	public void setId(String id) {
		this.id = id;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public void setTelphone(String telphone) {
		this.telphone = telphone;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
	public void setToUserId(String toUserId) {
		this.toUserId = toUserId;
	}
	public String getMessageFrom() {
		return messageFrom;
	}
	public void setMessageFrom(String messageFrom) {
		this.messageFrom = messageFrom;
	}
	
}
