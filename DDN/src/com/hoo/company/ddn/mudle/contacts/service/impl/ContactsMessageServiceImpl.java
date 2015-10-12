package com.hoo.company.ddn.mudle.contacts.service.impl;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.gilight.commons.DateUtils;
import cn.gilight.framework.dp.DaoSupport;

import com.hoo.company.base.util.NetUtil;
import com.hoo.company.ddn.manager.SessionManager;
import com.hoo.company.ddn.mudle.contacts.dao.IContactsMessageDao;
import com.hoo.company.ddn.mudle.contacts.entity.ContactsMessage;
import com.hoo.company.ddn.mudle.contacts.service.IContactsMessageService;

@Service("contactsMessageService")
public class ContactsMessageServiceImpl implements IContactsMessageService {

	@Resource
	private DaoSupport daoSupport;
	
	@Resource
	private IContactsMessageDao contactsMessageDao;
	
	public ContactsMessage add(ContactsMessage msg) throws SecurityException, NoSuchFieldException {
		msg.setCreateTime(DateUtils.getDateFormat(new Date(), "yyyy-MM-dd HH:mm:ss"));
		msg.setMessageFrom(NetUtil.getIpAddr(SessionManager.getInstance().getReq()));
		return daoSupport.insert(msg);
	}

	public ContactsMessage delete(ContactsMessage msg) {
		return daoSupport.delete(msg);
	}

	public List<ContactsMessage> queryLt(ContactsMessage msg) {
		return contactsMessageDao.queryLt(msg);
	}

}
