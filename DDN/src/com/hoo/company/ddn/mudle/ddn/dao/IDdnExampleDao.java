package com.hoo.company.ddn.mudle.ddn.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.hoo.company.ddn.mudle.ddn.entity.DdnExample;

import cn.gilight.framework.dp.model.Page;

public interface IDdnExampleDao {
	
	/**
	 * 返回 案例分页对象集合,单个对象格式为:
	 * {
	 * 	  userId:			"用户ID",
	 *    userHeadUrl:		"用户头像地址",
	 *    userName:			"用户名"
	 *    exampleName:		"案例名称",
	 *    exampleCoverUrl:	"案例封面地址",
	 *    styleName:		"风格名称",
	 *    priceName:		"价位名称",
	 *    houseTypeName:	"户型名称"
	 * }
	 * @param page 分页对象
	 * @param search 查询对象[支持的有: 风格、价位、户型ID、 案例名称【模糊匹配】 的检索]
	 * @return
	 */
	public List<?> queryLmPage(Page page,@Param("search")DdnExample search);
	
	/**
	 * 按 年-月 分组的 案例时间记录
	 * @return
	 */
	public List<Map<String,Object>> queryLmGroupTime();
}
