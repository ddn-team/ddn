package com.hoo.company.ddn.mudle.contacts.dao;

import java.util.List;

import com.hoo.company.ddn.mudle.contacts.entity.ContactsMessage;

/**
 * 联系模块--留言信息DAO层接口
 * @author hank
 *
 */
public interface IContactsMessageDao {
	
	/**
	 * 查询所有留言
	 * @param message
	 * @return
	 */
	public List<ContactsMessage> queryLt(ContactsMessage message);
}
