package com.hoo.company.ddn.mudle.contacts.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 留言实体类
 * @author hank
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
	/*** 留言时间戳(yyyyMMddHHmmss) */
	@Column(name="TIMESTAMP")
	private long timestamp;
	/*** 留言对象(留言给谁的)ID  */
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
	public long getTimestamp() {
		return timestamp;
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
	public void setTimestamp(long timestamp) {
		this.timestamp = timestamp;
	}
	public void setToUserId(String toUserId) {
		this.toUserId = toUserId;
	}
}
