package com.hoo.company.ddn.rpc.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.gilight.framework.dp.DaoSupport;

import com.hoo.company.ddn.mudle.ddn.entity.DdnExample;
import com.hoo.company.ddn.mudle.ddn.entity.ExamplePictures;
import com.hoo.company.ddn.mudle.ddn.model.ExampleModel;
import com.hoo.company.ddn.mudle.ddn.model.PictureModel;
import com.hoo.company.ddn.mudle.ddn.service.IDdnExamleService;
import com.hoo.company.ddn.mudle.ddn.service.IExamplePicturesService;
import com.hoo.company.ddn.rpc.IExampleRpc;
import com.hoo.company.ddn.util.DateUtils;
import com.hoo.company.ddn.util.SessionUtils;

@Service("exampleRpc")
public class ExampleRpcImpl implements IExampleRpc {

	@Resource IDdnExamleService exampleService;
	
	@Resource IExamplePicturesService examplePicturesService;
	
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

	public boolean delete(ExampleModel model) {
		
		return false;
	}

	public boolean deletePic(String picId) {
		return false;
	}

	public boolean update(ExampleModel model) {
		return false;
	}

	public boolean updatePic(ExampleModel model) {
		return false;
	}

}
