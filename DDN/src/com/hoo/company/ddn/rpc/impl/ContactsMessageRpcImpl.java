package com.hoo.company.ddn.rpc.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hoo.company.ddn.mudle.contacts.entity.ContactsMessage;
import com.hoo.company.ddn.mudle.contacts.service.IContactsMessageService;
import com.hoo.company.ddn.rpc.IContactsMessageRpc;

@Service("contactsMessageRpc")
public class ContactsMessageRpcImpl implements IContactsMessageRpc {

	@Resource
	IContactsMessageService messageService;
	
	public boolean add(ContactsMessage message) throws SecurityException, NoSuchFieldException {
		return messageService.add(message) != null;
	}

	public List<ContactsMessage> queryLt(ContactsMessage message) {
		return messageService.queryLt(message);
	}

}
