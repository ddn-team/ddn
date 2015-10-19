package com.hoo.company.ddn.mudle.ddn.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.hoo.company.ddn.mudle.ddn.entity.ExampleMessage;

public interface IExampleMessageDao {
	public List<ExampleMessage> queryLtByExampleId(@Param("message")ExampleMessage message);
}
