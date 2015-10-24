package com.hoo.company.ddn.rpc;

import java.util.List;

import com.hoo.company.ddn.mudle.contacts.entity.ContactsMessage;

public interface IContactsMessageRpc {
	
	/**
	 * 添加留言信息
	 * @param message
	 * @return
	 * @throws NoSuchFieldException 
	 * @throws SecurityException 
	 */
	public boolean add(ContactsMessage message) throws SecurityException, NoSuchFieldException;
	
	/**
	 * 根据条件查询所有留言
	 * @param message
	 * @return
	 */
	public List<ContactsMessage> queryLt(ContactsMessage message);
}
