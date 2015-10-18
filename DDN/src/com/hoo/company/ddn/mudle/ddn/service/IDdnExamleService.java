package com.hoo.company.ddn.mudle.ddn.service;

import com.hoo.company.ddn.mudle.ddn.entity.DdnExample;

/**
 * 案例服务层接口
 * @author hank
 */
public interface IDdnExamleService {
	
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
}
