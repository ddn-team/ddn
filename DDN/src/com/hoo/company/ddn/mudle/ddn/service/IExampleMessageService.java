package com.hoo.company.ddn.mudle.ddn.service;

import java.util.List;

import com.hoo.company.ddn.mudle.ddn.entity.ExampleMessage;

public interface IExampleMessageService {
	
	/**
	 * 新增一条留言
	 * @param message
	 * @return
	 * @throws NoSuchFieldException 
	 * @throws SecurityException 
	 */
	public ExampleMessage add(ExampleMessage message) throws SecurityException, NoSuchFieldException;
	/**
	 * 删除一条留言
	 * @param message
	 * @return
	 */
	public ExampleMessage delete(ExampleMessage message);
	/**
	 * 查询留言
	 * @param message {exampleId:""}
	 * @return
	 */
	public List<ExampleMessage> queryLtByExampleId(ExampleMessage message);
}
