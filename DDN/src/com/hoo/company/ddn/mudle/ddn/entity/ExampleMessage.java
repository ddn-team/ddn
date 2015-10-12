package com.hoo.company.ddn.mudle.ddn.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 案例留言表对应实体
 * @author hank
 *
 */
@SuppressWarnings("serial")
@Entity
@Table(name = "EXAMPLE_MESSAGE")
public class ExampleMessage implements Serializable {
	@Id
	private String id;
	@Column(name = "TITLE")
	private String title;
	@Column(name = "CONTENT")
	private String content;
	@Column(name = "CREATE_TIME")
	private String createTime;
	@Column(name = "EXAMPLE_ID")
	private String exampleId;
	/*** 冗余字段可不要*/
	@Column(name = "FROM_USER_ID")
	private String fromUserId;
	
	public String getId() {
		return id;
	}
	public String getTitle() {
		return title;
	}
	public String getContent() {
		return content;
	}
	public String getCreateTime() {
		return createTime;
	}
	public String getExampleId() {
		return exampleId;
	}
	public String getFromUserId() {
		return fromUserId;
	}
	public void setId(String id) {
		this.id = id;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
	public void setExampleId(String exampleId) {
		this.exampleId = exampleId;
	}
	public void setFromUserId(String fromUserId) {
		this.fromUserId = fromUserId;
	}
	
}
