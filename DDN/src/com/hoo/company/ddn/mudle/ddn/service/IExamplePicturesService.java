package com.hoo.company.ddn.mudle.ddn.service;

import java.util.List;

import com.hoo.company.ddn.mudle.ddn.entity.ExamplePictures;

public interface IExamplePicturesService {
	
	/**
	 * 新增
	 * @param pictures
	 * @return
	 * @throws NoSuchFieldException 
	 * @throws SecurityException 
	 */
	public ExamplePictures add(ExamplePictures picture) throws SecurityException, NoSuchFieldException;

	/**
	 * 批量新增
	 * @param pictures
	 * @throws NoSuchFieldException 
	 * @throws SecurityException 
	 */
	public void adds(List<ExamplePictures> pictures) throws SecurityException, NoSuchFieldException;
}
