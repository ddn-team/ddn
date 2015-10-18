package com.hoo.company.ddn.mudle.ddn.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.gilight.framework.dp.DaoSupport;

import com.hoo.company.ddn.mudle.ddn.entity.ExamplePictures;
import com.hoo.company.ddn.mudle.ddn.service.IExamplePicturesService;

@Service("examplePicturesService")
public class ExamplePicturesServiceImpl implements IExamplePicturesService {

	@Resource
	DaoSupport daoSupport;
	
	public ExamplePictures add(ExamplePictures picture) throws SecurityException, NoSuchFieldException {
		return daoSupport.insert(picture);
	}

	public void adds(List<ExamplePictures> pictures) throws SecurityException, NoSuchFieldException {
		daoSupport.inserts(pictures);
	}

}
