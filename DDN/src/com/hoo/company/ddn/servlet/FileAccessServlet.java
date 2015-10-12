package com.hoo.company.ddn.servlet;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.hoo.company.ddn.manager.SessionManager;
import com.hoo.company.ddn.util.ImageUtil;

import cn.gilight.commons.BrowserUtils;
import cn.gilight.commons.StringUtils;

@SuppressWarnings("serial")
public class FileAccessServlet extends HttpServlet {

	private static String root,dir = null;
	private static Set<String> picSuffix = null;
	
	public void destroy() {
		super.destroy();
		root = dir = null;
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		SessionManager.getInstance().setRequest(request);
		SessionManager.getInstance().setResponse(response);
		
		String url = request.getParameter("url"),
			suffix = url.substring(url.lastIndexOf(".")),
			userid = request.getParameter("userid");
		Integer pi = null;
		Long expires = 24*60*60*1000L;
		if(StringUtils.isEmpty(url)){ return; }
		//如果是gif,缓存增设为30天
		if(".gif".equals(suffix)){ expires = 30*expires;}
		
		//TODO 如果是手机访问,则进行压缩处理
		
		File file;
		if(BrowserUtils.isPC(request.getHeader("user-agent"))){
			file = new File(root + dir + userid + "/" + url);
		}else{
			String path = root + dir + "mobile_x_" + userid + "/" + url;
			//不使用编码处理文件流
			file = new File(path);
			if(!file.exists() && picSuffix.contains(suffix)){//如果不存在,(高宽不指定,默认原图)
				File ori = new File(root + dir + userid + "/" + url);
				if(!ori.exists()){
					return;//TODO 如果原图就不存在...(一个1px的点图)
				}else{
					//TODO 对原图进行截取缩放,压缩等处理。然后再次读取file
					String pathDir = path.substring(0, path.lastIndexOf(file.getName()));
					File dirFile = new File(pathDir);
					if(!dirFile.exists()){ dirFile.mkdirs();}
					//默认到手机上的像素宽度
					if(null == pi){ pi = 300; }
					ImageUtil.resize(ori, file, pi, 1f);
				}
			}
		}
		printout(response, file, expires);
	}
	
	private void printout(HttpServletResponse response,File file,Long expires) throws IOException{
		OutputStream out = null;
		BufferedInputStream  bis = null;
		BufferedOutputStream bos = null;
		try{
			
			response.reset();
			
			out = response.getOutputStream();
			
			response.setHeader("Content-Type", getServletContext().getMimeType(file.getPath())+ ";charset=UTF-8");
			response.setHeader("Content-Length", String.valueOf(file.length()));
			response.setHeader("Content-Disposition", "inline; filename=\"" + file.getName() + "\"");
			
			//为了节省流量,设置1天的缓存
			Long time = (new Date()).getTime();
			response.setDateHeader("Last-Modified",time); 
			response.setDateHeader("Expires",time + expires);  
			response.setHeader("Cache-Control", "public"); 
			response.setHeader("Pragma", "Pragma");
			
			InputStream input = new FileInputStream(file);
			bis = new BufferedInputStream(input);
			bos = new BufferedOutputStream(out);
			byte[] data = new byte[200];//1024  4096 
			int size = bis.read(data);
			while(size != -1){
				bos.write(data,0,size);
				size = bis.read(data);
			}
			
		}finally{
			bis.close();
			bos.flush();
			bos.close();
			out.close();
		}
	}
	
	
	public void init() throws ServletException {
		ServletConfig config = this.getServletConfig();
		root = config.getInitParameter("root");
		dir  = config.getInitParameter("dir" );
		if(StringUtils.isEmpty(dir)){ dir = "upload_file/"; }
		if(!root.endsWith("/")){ root = root.concat("/");}
		if(!dir.endsWith("/")) {  dir = dir.concat("/"); }
		File file = new File(root + dir);
		if(!file.exists()){ file.mkdirs();}
		
		picSuffix = new HashSet<String>();
		//TODO add...
		picSuffix.add(".png");
		picSuffix.add(".jpg");
		picSuffix.add(".gif");
		picSuffix.add(".jpeg");
	}

}
