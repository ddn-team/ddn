package com.hoo.company.ddn.rpc.impl;

import java.io.BufferedReader;
import java.io.File;
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

@Service("dictionariesRpc")
public class DictionariesRpcImpl implements IDictionariesRpc {

	@Resource
	IBaseDictionariesService dService;

	public void initDictionaries() {
		// TODO 初始化数据
		// 1、户型 2、风格 3、造价
		// 4、案例图片类型
		
		if(dService.getCount(new BaseDictionaries()) >0 ){ return; }
		
		ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
		if (classLoader == null) {
			classLoader = ClassLoader.getSystemClassLoader();
		}
		java.net.URL url = classLoader.getResource("");
		String ROOT_CLASS_PATH = url.getPath() + "/";
		File rootFile = new File(ROOT_CLASS_PATH);
		String WEB_INFO_DIRECTORY_PATH = rootFile.getParent() + "/";
		File webInfoDir = new File(WEB_INFO_DIRECTORY_PATH);
		String SERVLET_CONTEXT_PATH = webInfoDir.getParent() + "/";

		// 这里 SERVLET_CONTEXT_PATH 就是WebRoot的路径

		String path = SERVLET_CONTEXT_PATH + "/" + "dictionaries.json";
		path = path.replaceAll("%20", " ");
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
