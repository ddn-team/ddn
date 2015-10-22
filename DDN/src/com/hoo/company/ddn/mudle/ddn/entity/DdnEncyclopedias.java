package com.hoo.company.ddn.mudle.ddn.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 百科实体类
 * 
 * @author hank
 */
@SuppressWarnings("serial")
@Entity
@Table(name = "DDN_ENCYCLOPEDIAS")
public class DdnEncyclopedias implements Serializable {
	@Id
	private String id;
	@Column(name = "QUESTION")
	private String question;
	@Column(name = "ANSWER")
	private String answer;
	@Column(name="KEYWORDS")
	private String keywords;//TODO 添加关键字字段
	@Column(name = "CREATE_TIME")
	private String createTime;
	@Column(name = "LAST_UPDATE_TIME")
	private String lastUpdateTime;
	@Column(name = "CREATE_USER_ID")
	private String createUserId;
	public String getId() {
		return id;
	}
	public String getQuestion() {
		return question;
	}
	public String getAnswer() {
		return answer;
	}
	public String getKeywords() {
		return keywords;
	}
	public String getCreateTime() {
		return createTime;
	}
	public String getLastUpdateTime() {
		return lastUpdateTime;
	}
	public String getCreateUserId() {
		return createUserId;
	}
	public void setId(String id) {
		this.id = id;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	public void setKeywords(String keywords) {
		this.keywords = keywords;
	}
	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
	public void setLastUpdateTime(String lastUpdateTime) {
		this.lastUpdateTime = lastUpdateTime;
	}
	public void setCreateUserId(String createUserId) {
		this.createUserId = createUserId;
	}

}
