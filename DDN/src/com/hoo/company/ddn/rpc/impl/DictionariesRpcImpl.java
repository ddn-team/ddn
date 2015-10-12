package com.hoo.company.ddn.rpc.impl;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONArray;
import com.hoo.company.ddn.mudle.base.entity.BaseDictionaries;
import com.hoo.company.ddn.mudle.base.service.IBaseDictionariesService;
import com.hoo.company.ddn.rpc.IDictionariesRpc;
import com.hoo.company.ddn.util.FileUtils;

@Service("dictionariesRpc")
public class DictionariesRpcImpl implements IDictionariesRpc {

	@Resource
	IBaseDictionariesService dService;

	public void initDictionaries() {
		// TODO 初始化数据
		// 1、户型 2、风格 3、造价
		// 4、案例图片类型
		
		if(dService.getCount(new BaseDictionaries()) >0 ){ return; }
		
		String path = FileUtils.getWebRootPath() + "dictionaries.json";
		String result = "";  
		FileReader reader = null;  
		 BufferedReader br = null;
		try {  
            reader = new FileReader(path);  
            br = new BufferedReader(reader);  
            String s = null;  
            while ((s = br.readLine()) != null) { result += s;  }  
           
            result = new String(result.getBytes(),"utf-8");
            
            List<BaseDictionaries> ls = JSONArray.parseArray(result, BaseDictionaries.class);
            dService.adds(ls);
        } catch (FileNotFoundException e) {  
            e.printStackTrace();  
        } catch (IOException e) {  
            e.printStackTrace();  
        } catch (SecurityException e) {
			e.printStackTrace();
		} catch (NoSuchFieldException e) {
			e.printStackTrace();
		}finally{
        	 try {
				if(null != br)br.close();
				if(null != reader)reader.close();  
			} catch (IOException e) {
				e.printStackTrace();
			}  
        }  
	}

	public List<BaseDictionaries> queryLtByBelongType(String belongType) {
		return dService.queryLtByBelongType(belongType);
	}

}
