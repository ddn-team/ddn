package com.hoo.company.ddn.mudle.ddn.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.hoo.company.ddn.mudle.ddn.entity.ExamplePictures;

public interface IExamplePicturesDao {

	/**
	 * 根据案例ID 获取所有相关案例图片集合
	 * @param exampleId 案例ID
	 * @return
	 */
	public List<ExamplePictures> queryLtByExampleId(@Param("exampleId")String exampleId);
	
	/**
	 * 根据ExamplePictures中  传递的属性 获取ExamplePictures对象
	 * @param pictures
	 * @return
	 */
	public ExamplePictures queryT(@Param("pictures") ExamplePictures pictures);
}
