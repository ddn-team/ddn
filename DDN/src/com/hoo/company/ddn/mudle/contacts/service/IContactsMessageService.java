package com.hoo.company.ddn.mudle.contacts.service;

import java.util.List;

import com.hoo.company.ddn.mudle.contacts.entity.ContactsMessage;


/**
 * 联系模块--留言消息服务层接口
 * @author hank
 *
 */
public interface IContactsMessageService {

	/**
	 * 添加留言
	 * @param msg
	 * @return
	 * @throws NoSuchFieldException 
	 * @throws SecurityException 
	 */
	public ContactsMessage add(ContactsMessage msg) throws SecurityException, NoSuchFieldException;
	
	/**
	 * 删除留言
	 * @param msg
	 * @return
	 */
	public ContactsMessage delete(ContactsMessage msg);
	
	/**
	 * 查询留言
	 * @param msg {toUserId:"被留言人ID"}
	 * @return
	 */
	public List<ContactsMessage> queryLt(ContactsMessage msg);
}
