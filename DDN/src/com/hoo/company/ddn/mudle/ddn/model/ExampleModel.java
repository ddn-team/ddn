package com.hoo.company.ddn.mudle.ddn.model;

import java.util.List;

/**
 * 案例模型
 * @author hank
 */
public class ExampleModel {
	/*** 案例ID */
	private String id;
	/*** 案例名称*/
	private String name;
	/*** 头像链接 */
	private String coverUrl;
	/*** 案例描述 */
	private String describes;
	/*** 风格ID*/
	private String styleId;
	/*** 造价ID */
	private String priceId;
	/*** 户型ID */
	private String houseTypeId;
	/*** 案图片例模型 */
	private List<PictureModel> pics;
	/*** 关键词 */
	private String keyword;

	public String getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getCoverUrl() {
		return coverUrl;
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

	public List<PictureModel> getPics() {
		return pics;
	}

	public String getKeyword() {
		return keyword;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setCoverUrl(String coverUrl) {
		this.coverUrl = coverUrl;
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

	public void setPics(List<PictureModel> pics) {
		this.pics = pics;
	}

	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	
}
