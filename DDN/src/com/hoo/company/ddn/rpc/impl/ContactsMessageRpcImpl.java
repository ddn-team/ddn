package com.hoo.company.ddn.rpc.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hoo.company.ddn.mudle.base.entity.BaseUser;
import com.hoo.company.ddn.mudle.base.service.IBaseUserService;
import com.hoo.company.ddn.mudle.contacts.entity.ContactsMessage;
import com.hoo.company.ddn.mudle.contacts.service.IContactsMessageService;
import com.hoo.company.ddn.rpc.IContactsMessageRpc;

@Service("contactsMessageRpc")
public class ContactsMessageRpcImpl implements IContactsMessageRpc {

	@Resource
	IContactsMessageService messageService;
	
	@Resource
	IBaseUserService userService;
	
	public boolean add(ContactsMessage message) throws SecurityException, NoSuchFieldException {
		String toUserId = message.getToUserId();
		//TODO 兼容处理
		if(toUserId == null || "admin".equals(toUserId)){
			BaseUser user = new BaseUser();
			user.setUserName("admin");
			user = userService.queryT(user);
			if(null == user){
				throw new NullPointerException("当前系统缺少admin账号,系统必须包含admin账号.");
			}
			message.setToUserId(user.getId());
		}
		return messageService.add(message) != null;
	}

	public List<ContactsMessage> queryLt(ContactsMessage message) {
		return messageService.queryLt(message);
	}

}
