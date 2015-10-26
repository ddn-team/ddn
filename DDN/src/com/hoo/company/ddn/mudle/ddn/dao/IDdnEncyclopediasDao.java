package com.hoo.company.ddn.mudle.ddn.dao;

import java.util.List;

import cn.gilight.framework.dp.model.Page;

import com.hoo.company.ddn.mudle.ddn.entity.DdnEncyclopedias;

/**
 * 百科数据服务层
 * @author hank
 */
public interface IDdnEncyclopediasDao {
	/**
	 * 分页查询百科信息
	 * @param page
	 * @return
	 */
	public List<?> queryLtPage(Page page);
}
