package com.hoo.company.ddn.mudle.ddn.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@SuppressWarnings("serial")
@Entity
@Table(name = "DDN_EXAMPLE")
public class DdnExample implements Serializable {
	@Id
	private String id;
	@Column(name = "COVER_URL")
	private String coverUrl;
	@Column(name = "NAME")
	private String name;
	@Column(name = "DESCRIBES")
	private String describes;
	@Column(name = "STYLE_ID")
	private String styleId;
	@Column(name = "PRICE_ID")
	private String priceId;
	@Column(name = "HOUSE_TYPE_ID")
	private String houseTypeId;
	@Column(name = "CREATE_TIME")
	private String createTime;
	@Column(name = "CREATE_USER_ID")
	private String createUserId;
	@Column(name = "KEYWORD")
	private String keyword;
	
	public String getId() {
		return id;
	}
	public String getCoverUrl() {
		return coverUrl;
	}
	public String getName() {
		return name;
	}
	public String getDescribes() {
		return describes;
	}
	public String getStyleId() {
		return styleId;
	}
	public String getPriceId() {
		return priceId;
	}
	public String getHouseTypeId() {
		return houseTypeId;
	}
	public String getCreateTime() {
		return createTime;
	}
	public String getCreateUserId() {
		return createUserId;
	}
	public String getKeyword() {
		return keyword;
	}
	public void setId(String id) {
		this.id = id;
	}
	public void setCoverUrl(String coverUrl) {
		this.coverUrl = coverUrl;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setDescribes(String describes) {
		this.describes = describes;
	}
	public void setStyleId(String styleId) {
		this.styleId = styleId;
	}
	public void setPriceId(String priceId) {
		this.priceId = priceId;
	}
	public void setHouseTypeId(String houseTypeId) {
		this.houseTypeId = houseTypeId;
	}
	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
	public void setCreateUserId(String createUserId) {
		this.createUserId = createUserId;
	}
	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	
}
