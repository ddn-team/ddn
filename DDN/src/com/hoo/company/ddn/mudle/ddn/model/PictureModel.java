package com.hoo.company.ddn.mudle.ddn.model;

import java.util.List;

/**
 * 案例图片模型
 * 
 * @author hank
 * 
 */
public class PictureModel {
	/*** 案例ID */
	private String exampleId;
	/*** 类型编码 */
	private String typeCode;
	/*** 图片路径集合 */
	private List<String> urls;

	public String getExampleId() {
		return exampleId;
	}

	public String getTypeCode() {
		return typeCode;
	}

	public List<String> getUrls() {
		return urls;
	}

	public void setExampleId(String exampleId) {
		this.exampleId = exampleId;
	}

	public void setTypeCode(String typeCode) {
		this.typeCode = typeCode;
	}

	public void setUrls(List<String> urls) {
		this.urls = urls;
	}

}
