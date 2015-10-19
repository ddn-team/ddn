package com.hoo.company.ddn.rpc.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.gilight.framework.dp.DaoSupport;

import com.hoo.company.ddn.mudle.ddn.entity.DdnExample;
import com.hoo.company.ddn.mudle.ddn.entity.ExampleMessage;
import com.hoo.company.ddn.mudle.ddn.entity.ExamplePictures;
import com.hoo.company.ddn.mudle.ddn.model.ExampleModel;
import com.hoo.company.ddn.mudle.ddn.model.PictureModel;
import com.hoo.company.ddn.mudle.ddn.service.IDdnExamleService;
import com.hoo.company.ddn.mudle.ddn.service.IExampleMessageService;
import com.hoo.company.ddn.mudle.ddn.service.IExamplePicturesService;
import com.hoo.company.ddn.rpc.IExampleRpc;
import com.hoo.company.ddn.util.DateUtils;
import com.hoo.company.ddn.util.SessionUtils;

@Service("exampleRpc")
public class ExampleRpcImpl implements IExampleRpc {

	@Resource IDdnExamleService exampleService;
	
	@Resource IExamplePicturesService examplePicturesService;
	
	@Resource IExampleMessageService exampleMessage;
	
	public boolean add(ExampleModel model) {
		
		DdnExample example = new DdnExample();
		example.setCoverUrl(model.getCoverUrl());
		example.setDescribes(model.getDescribes());
		example.setKeyword(model.getKeyword());
		example.setName(model.getName());
		example.setHouseTypeId(model.getHouseTypeId());
		example.setPriceId(example.getPriceId());
		example.setStyleId(model.getStyleId());
		try {
			example = exampleService.add(example);
			List<PictureModel> pics = model.getPics();
			List<ExamplePictures> eps = new ArrayList<ExamplePictures>();
			for(PictureModel m : pics){
				List<String> us = m.getUrls();
				for(int i=0,len = us.size();i<len;i++){
					ExamplePictures ep = new ExamplePictures();
					ep.setExampleId(example.getId());
					ep.setTypeCode(m.getTypeCode());
					ep.setPictureUrl(us.get(i));
					ep.setSortNum(i);
					eps.add(ep);
				}
			}
			examplePicturesService.adds(eps);
			return true;
		} catch (SecurityException e) {
			e.printStackTrace();
		} catch (NoSuchFieldException e) {
			e.printStackTrace();
		}
		
		return false;
	}

	/**
	 * 传值 id 即可
	 * {
	 * 	id:"xxx"
	 * }
	 */
	public boolean delete(ExampleModel model) {
		
		DdnExample example = new DdnExample();
		example.setId(model.getId());
		List<ExamplePictures> pics = examplePicturesService.queryLtByExampleId(model.getId());
		examplePicturesService.deletes(pics);
		exampleService.delete(example);
		return false;
	}

	public boolean deletePic(String picId) {
		ExamplePictures pic = new ExamplePictures();
		pic.setId(picId);
		return examplePicturesService.delete(pic) != null;
	}

	public boolean update(ExampleModel model) {
		DdnExample example = exampleService.queryById(model.getId());
		if(null!=model.getCoverUrl()){example.setCoverUrl(model.getCoverUrl());}
		if(null!=model.getDescribes()){ example.setDescribes(model.getDescribes());}
		if(null!=model.getHouseTypeId()){example.setHouseTypeId(model.getHouseTypeId());}
		if(null!=model.getKeyword()){example.setKeyword(model.getKeyword());}
		if(null!=model.getName()){example.setName(model.getName());}
		if(null!=model.getPriceId()){example.setPriceId(model.getPriceId());}
		if(null!=model.getStyleId()){example.setStyleId(model.getStyleId());}
		return exampleService.update(example) != null;
	}

	public ExamplePictures updatePic(PictureModel model) throws SecurityException, NoSuchFieldException {
		ExamplePictures pic = new ExamplePictures();
		pic.setExampleId(model.getExampleId());
		pic.setPictureUrl(model.getUrls().get(0));
		pic.setTypeCode(model.getTypeCode());
		return examplePicturesService.add(pic);
	}

	public boolean addMessage(ExampleMessage message) throws SecurityException, NoSuchFieldException {
		return exampleMessage.add(message) != null;
	}

	public boolean deleteMessageById(String id) {
		ExampleMessage message = new ExampleMessage();
		message.setId(id);
		return exampleMessage.delete(message) != null;
	}

	public List<ExampleMessage> queryMessagesByExampleId(String exampleId) {
		ExampleMessage message = new ExampleMessage();
		message.setExampleId(exampleId);
		return exampleMessage.queryLtByExampleId(message);
	}

	
}
