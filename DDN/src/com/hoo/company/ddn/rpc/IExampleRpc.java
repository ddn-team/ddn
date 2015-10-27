package com.hoo.company.ddn.rpc;

import java.util.List;
import java.util.Map;

import com.hoo.company.ddn.mudle.ddn.entity.ExampleMessage;
import com.hoo.company.ddn.mudle.ddn.entity.ExamplePictures;
import com.hoo.company.ddn.mudle.ddn.model.ExampleModel;
import com.hoo.company.ddn.mudle.ddn.model.PictureModel;

/**
 * 案例相关对外接口
 * @author hank
 *
 */
public interface IExampleRpc {
	
	/**
	 * 查询单个案例集合
	 * @param model
	 * @return
	 * @throws Exception 
	 */
	public ExampleModel queryT(ExampleModel model) throws Exception;
	
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
	 * 修改案例信息[注意:是差异化更新,即如果没修改可以不传到后台]
	 * urls的修改请参照 {@link #deletePic(String)} 和  {@link #updatePic(PictureModel)}
	 * @param example
	 * @return
	 */
	public boolean update(ExampleModel model);
	
	/**
	 * 删除图片
	 * @param picId 图片ID
	 * @return
	 */
	public boolean deletePic(String picId);
	
	/**
	 * 修改时[新增添加]图片,修改案例时的添加图片,均依照此种方式添加图片
	 * @param model 注意: 修改是 urls:[""] 有且只传一个
	 * @return
	 * @throws SecurityException
	 * @throws NoSuchFieldException
	 */
	public ExamplePictures updatePic(PictureModel model) throws SecurityException, NoSuchFieldException;
	
	/**
	 * 添加留言
	 * @param message
	 * @return
	 * @throws NoSuchFieldException 
	 * @throws SecurityException 
	 */
	public boolean addMessage(ExampleMessage message) throws SecurityException, NoSuchFieldException;
	
	/**
	 * 删除留言
	 * @param id
	 * @return
	 */
	public boolean deleteMessageById(String id);
	
	/**
	 * 查询留言
	 * @param exampleId 案例ID
	 * @return
	 */
	public List<ExampleMessage> queryMessagesByExampleId(String exampleId);

	public List<Map<String,Object>> queryLmGroupTime();
}
