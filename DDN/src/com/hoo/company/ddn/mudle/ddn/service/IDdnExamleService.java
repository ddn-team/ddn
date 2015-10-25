package com.hoo.company.ddn.mudle.ddn.service;

import cn.gilight.framework.dp.model.Page;

import com.hoo.company.ddn.mudle.ddn.entity.DdnExample;

/**
 * 案例服务层接口
 * @author hank
 */
public interface IDdnExamleService {
	
	/**
	 * 通过ID获取对象
	 * @param id
	 * @return
	 */
	public DdnExample queryById(String id);
	/**
	 * 新增案例
	 * @param example
	 * @return
	 * @throws NoSuchFieldException 
	 * @throws SecurityException 
	 */
	public DdnExample add(DdnExample example) throws SecurityException, NoSuchFieldException;
	
	/**
	 * 修改案例 如标题名称  描述 类型等  图片的变更请看examplePictures
	 * @param example
	 * @return
	 */
	public DdnExample update(DdnExample example);
	
	/**
	 * 删除案例,同时删除的有:案例留言、案例图片信息
	 * @param example
	 * @return
	 */
	public DdnExample delete(DdnExample example);
	
	/**
	 * 分页检索案例信息【首页】
	 * @param page {start:0,limit:20} 其中start为起始索引,limit为每页查询条数
	 * @param example 当前支持  styleId,priceId,houseTypeId 以及 name的模糊查询
	 * @return {
	 * 		start : 20,  //需认为将前端传的start对象 重新赋值如 ：  var start = 0; 执行ajax调用后在回调中    start = page对象.start;
	 *      rows  : [{}] //为dao层返回集合
	 * }
	 */
	public Page queryLmPage(Page page,DdnExample example);
}
