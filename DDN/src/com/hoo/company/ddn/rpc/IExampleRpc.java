package com.hoo.company.ddn.rpc;

import com.hoo.company.ddn.mudle.ddn.entity.DdnExample;
import com.hoo.company.ddn.mudle.ddn.model.ExampleModel;

/**
 * 案例相关对外接口
 * @author hank
 *
 */
public interface IExampleRpc {
	
	/**
	 * 新增案例
	 * @param model
	 * @return
	 */
	public boolean add(ExampleModel model);
	
	/**
	 * 删除案例
	 * @param model
	 * @return
	 */
	public boolean delete(ExampleModel model);
	
	/**
	 * 修改案例信息?  DdnExample
	 * @param example
	 * @return
	 */
	public boolean update(ExampleModel model);
	
	/**
	 * 删除图片
	 * @param picId
	 * @return
	 */
	public boolean deletePic(String picId);

	
	/**
	 * 修改添加图片?
	 */
}
