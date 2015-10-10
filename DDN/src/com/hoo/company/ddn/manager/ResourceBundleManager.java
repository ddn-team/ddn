package com.hoo.company.ddn.manager;

import java.util.ResourceBundle;
import java.util.concurrent.ConcurrentHashMap;

/**
 * ResourceBundle管理类
 * @author hank
 *
 */
public class ResourceBundleManager {
	private static ResourceBundleManager manager;
	private ConcurrentHashMap<String,ResourceBundle> map = new ConcurrentHashMap<String,ResourceBundle>();
	private ResourceBundleManager(){}
	/**
	 * 获取ResourceBundleManager一个单例对象
	 * @return
	 */
	public static ResourceBundleManager getInstance(){
		synchronized (ResourceBundleManager.class) {
			if(null == manager){ manager = new ResourceBundleManager(); }
		}
		return manager;
	}
	
	/**
	 * 获取ResourceBundle实例对象
	 * @param propertiesName
	 * @return
	 */
	public ResourceBundle getBundle(String propertiesName){
		if(!map.containsKey(propertiesName)){
			map.put(propertiesName, ResourceBundle.getBundle(propertiesName));
		}
		return map.get(propertiesName);
	}
}
