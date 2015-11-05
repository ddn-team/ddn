package com.hoo.company.ddn.util;

import java.io.File;
import java.net.URL;

public class FileUtils {

	public static String getRootPath() {
		ClassLoader cl = Thread.currentThread().getContextClassLoader();
		if (cl == null) {
			cl = ClassLoader.getSystemClassLoader();
		}
		URL url = cl.getResource("");
		return url.getPath() + "/";
	}
	
	public static String getWebInfoPath(){
		File  rfile = new File(getRootPath());
		return rfile.getParent() + "/";
	}
	
	public static String getWebRootPath(){
		File  wfile = new File(getWebInfoPath());
		return wfile.getParent() + "/";
	}
	
	public static void main(String[] args) {
		String filename = "D:\\WORKPLACE\\PCM\\WebRoot\\page_swxx\\index.html";
		System.out.println(filename.replace("D:\\WORKPLACE\\PCM\\WebRoot\\page_swxx", "D:\\WORKPLACE\\PCM\\WebRoot\\page"));
	}
	
	/**
	 * 根据文件名获取后缀(简版)
	 * @param filename
	 * @return
	 */
	public static String getExt(String filename){
		String[] dirs = filename.split(".");
		if(dirs.length > 0){
			return dirs[dirs.length - 1];
		}
		return null;
	}
}
