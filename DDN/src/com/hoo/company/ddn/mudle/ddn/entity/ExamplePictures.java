package com.hoo.company.ddn.mudle.ddn.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 案例图片维护表
 * 
 * @author hank
 * 
 */
@SuppressWarnings("serial")
@Entity
@Table(name = "EXAMPLE_PICTURES")
public class ExamplePictures implements Serializable {
	@Id
	private String id;
	@Column(name = "TYPE_CODE")
	private String typeCode;
	@Column(name = "PICTURE_URL")
	private String pictureUrl;
	@Column(name = "SORT_NUM")
	private int sortNum;
	@Column(name = "EXAMPLE_ID")
	private String exampleId;

	public String getId() {
		return id;
	}

	public String getTypeCode() {
		return typeCode;
	}

	public String getPictureUrl() {
		return pictureUrl;
	}

	public int getSortNum() {
		return sortNum;
	}

	public String getExampleId() {
		return exampleId;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setTypeCode(String typeCode) {
		this.typeCode = typeCode;
	}

	public void setPictureUrl(String pictureUrl) {
		this.pictureUrl = pictureUrl;
	}

	public void setSortNum(int sortNum) {
		this.sortNum = sortNum;
	}

	public void setExampleId(String exampleId) {
		this.exampleId = exampleId;
	}

}
