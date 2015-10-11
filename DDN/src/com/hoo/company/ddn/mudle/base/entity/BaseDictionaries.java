package com.hoo.company.ddn.mudle.base.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 基础-字典表
 * @author hank
 *
 */
@Entity
@Table(name="BASE_DICTIONARIES")
@SuppressWarnings("serial")
public class BaseDictionaries implements Serializable {
	@Id
	private String id;
	/*** 所属类型*/
	@Column(name="BELONG_TYPE")
	private String belongType;
	/*** 所属类型名称 */
	@Column(name="BELONG_TYPE_NAME")
	private String belongTypeName;
	/*** 字典编码*/
	@Column(name="TYPE_CODE")
	private String typeCode;
	/*** 字典名称*/
	@Column(name="TYPE_NAME")
	private String typeName;
	/*** 是否允许修改 */
	@Column(name="ALLOW_FIXED")
	private boolean allowFixed;
	/*** 字典顺序序号 */
	@Column(name="SORT_NUM")
	private int sortNum;
	
	public String getId() {
		return id;
	}
	public String getBelongType() {
		return belongType;
	}
	public String getBelongTypeName() {
		return belongTypeName;
	}
	public String getTypeCode() {
		return typeCode;
	}
	public String getTypeName() {
		return typeName;
	}
	public int getSortNum() {
		return sortNum;
	}
	public boolean isAllowFixed() {
		return allowFixed;
	}
	public void setId(String id) {
		this.id = id;
	}
	public void setBelongType(String belongType) {
		this.belongType = belongType;
	}
	public void setBelongTypeName(String belongTypeName) {
		this.belongTypeName = belongTypeName;
	}
	public void setTypeCode(String typeCode) {
		this.typeCode = typeCode;
	}
	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}
	public void setAllowFixed(boolean allowFixed) {
		this.allowFixed = allowFixed;
	}
	public void setSortNum(int sortNum) {
		this.sortNum = sortNum;
	}
	
}
