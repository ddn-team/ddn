package com.hoo.company.ddn.servlet;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.log4j.Logger;
import org.springframework.util.ObjectUtils;

import com.alibaba.fastjson.JSONObject;
import com.hoo.company.ddn.manager.SessionManager;
import com.hoo.company.ddn.mudle.base.model.DdnUser;
import com.hoo.company.ddn.util.FileUtils;
import com.hoo.company.ddn.util.SessionUtils;


@SuppressWarnings("serial")
public class UploadServlet extends HttpServlet {

	Logger log = Logger.getLogger(this.getClass().getName());
	/*** 文件存储路径 */
	private String filePath = null;
	/*** 文件临时存储路径 */
	private String tempPath = null;
	/*** 单个文件大小（最大限制） */
	private Long maxLength = null;

	//http://www.cnblogs.com/xlhblogs/archive/2012/07/05/2577116.html
	// http://blog.csdn.net/hxlzpnyist/article/details/7601611
	//暂时支持单一文件上传
	@Override
	public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		SessionManager.getInstance().setRequest(req);
		SessionManager.getInstance().setResponse(res);
		
		
		String characterEncoding = req.getCharacterEncoding();
		if(characterEncoding == null){characterEncoding = "utf-8";req.setCharacterEncoding(characterEncoding);}
		res.setContentType("text/html; charset=" + characterEncoding);  
		
		PrintWriter pw = res.getWriter();
		
		//DdnUser user = SessionUtils.getUser();
		/*if(user == null){
			Ajax ajax = new Ajax();
			ajax.setCode(Code.error);
			ajax.setResult("尚未登录,请登录后上传.");
			pw.print(ajax);return;
		}*/
		JSONObject m = new JSONObject();
		List<String> l = new ArrayList<String>();
		try {
			DiskFileItemFactory diskFactory = new DiskFileItemFactory();
			// threshold 极限、临界值，即硬盘缓存 128M
			diskFactory.setSizeThreshold(128 * 1024);
			// repository 贮藏室，即临时文件目录
			diskFactory.setRepository(new File(tempPath));
			ServletFileUpload upload = new ServletFileUpload(diskFactory);
			// 设置允许上传的最大文件大小 
			upload.setSizeMax(maxLength);
			// 解析HTTP请求消息头
			List<FileItem> fileItems = upload.parseRequest(req);
			Iterator<FileItem> iter = fileItems.iterator();
			while (iter.hasNext()) {
				FileItem item = iter.next();
				if (item.isFormField()) {
					//System.out.println("处理表单内容 ..."); processFormField(item, pw);
				} else {
					log.info("处理上传的文件 ...");
					String filename = processUploadFile(item, pw);
					if(!ObjectUtils.isEmpty(new Object[]{filename})){
						l.add(filename);
					}
				}
			}
			m.put("code","success");
			m.put("result",l);
			
		} catch (Exception e) {
			log.info("使用 fileupload 包时发生异常 ...");
			e.printStackTrace();
			m.put("code","failure");
			m.put("result",e.getCause());
		}finally{
			pw.print(m.toJSONString());
			pw.flush();
			pw.close();
		}
	}

	// 处理表单内容
	/*private void processFormField(FileItem item, PrintWriter pw) throws Exception {
		String name = item.getFieldName();
		String value = item.getString();
		pw.println(name + " : " + value + "\r\n");
	}*/

	// 处理上传的文件
	private String processUploadFile(FileItem item, PrintWriter pw) throws Exception {
		// 此时的文件名包含了完整的路径，得注意加工一下
		String filename = item.getName();
		log.info("完整的文件名：" + filename);
		int index = filename.lastIndexOf("\\");
		filename = filename.substring(index + 1, filename.length());

		long fileSize = item.getSize();

		if ("".equals(filename) && fileSize == 0) {
			log.info("文件名为空 ...");
		}
		//TODO USER测试
		DdnUser user = SessionUtils.getUser();
		
		File uploadFile = new File(filePath + "/" + (user == null ? null : user.getId()) + "/" + filename);
		item.write(uploadFile);
		//pw.println(filename + " 文件保存完毕 ...");
		//pw.println("文件大小为 ：" + fileSize + "\r\n");
		return filename;
	}

	@Override public void init(ServletConfig config) throws ServletException {
		super.init(config);
		filePath = config.getInitParameter("filePath");
		tempPath = config.getInitParameter("tempPath");
		// 默认文件最大值为10M
		maxLength= config.getInitParameter("maxLength") == null ? 10 * 1024 * 1024L
				   :Integer.valueOf(config.getInitParameter("maxLength")) * 1024 * 1024L;
		if (filePath == null) {	filePath = FileUtils.getWebRootPath() + "upload_file/";}
		if (tempPath == null) { tempPath = FileUtils.getWebRootPath() + "upload_file_temp/";}
		File fp = new File(filePath),tp = new File(tempPath);
		if(!fp.exists()){ fp.mkdirs();}
		if(!tp.exists()){ tp.mkdirs();}
		// http://haolloyin.blog.51cto.com/1177454/368162
	}

}
