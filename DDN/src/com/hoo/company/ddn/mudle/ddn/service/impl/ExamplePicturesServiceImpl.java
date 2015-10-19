package com.hoo.company.ddn.mudle.ddn.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.gilight.framework.dp.DaoSupport;

import com.hoo.company.ddn.mudle.ddn.dao.IExamplePicturesDao;
import com.hoo.company.ddn.mudle.ddn.entity.ExamplePictures;
import com.hoo.company.ddn.mudle.ddn.service.IExamplePicturesService;
import com.hoo.company.ddn.util.DateUtils;

@Service("examplePicturesService")
public class ExamplePicturesServiceImpl implements IExamplePicturesService {

	@Resource
	private DaoSupport daoSupport;
	
	@Resource
	private IExamplePicturesDao examplePicturesDao;
	public ExamplePictures add(ExamplePictures picture) throws SecurityException, NoSuchFieldException {
		picture.setCreateTime(DateUtils.getNow());
		return daoSupport.insert(picture);
	}

	public void adds(List<ExamplePictures> pictures) throws SecurityException, NoSuchFieldException {
		// index考虑是否也加入
		for(ExamplePictures pic : pictures){
			pic.setCreateTime(DateUtils.getNow());
		}
		daoSupport.inserts(pictures);
	}

	public List<ExamplePictures> queryLtByExampleId(String exampleId) {
		return examplePicturesDao.queryLtByExampleId(exampleId);
	}

	public void deletes(List<ExamplePictures> pictures) {
		daoSupport.deletes(pictures);
	}

	public ExamplePictures delete(ExamplePictures pic) {
		return daoSupport.delete(pic);
	}

}
