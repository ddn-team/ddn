package com.hoo.company.ddn.util;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;

public class DateUtils {
	/**
	 * 得到当前时间, 格式: yyyy-MM-dd HH:mm:ss
	 * 
	 * @return
	 */
	public static String getNow() {
		return getNow("yyyy-MM-dd HH:mm:ss");
	}
	
	public static String getNow(String format){
		return cn.gilight.commons.DateUtils.getCurrentDateFormat(format);
	}
	
	/**
	 * 将 格式化后的datetime 再次进行格式化输出
	 * @param datetime
	 * @param format
	 * @return
	 */
	public static String getFormat(String datetime,String format){
		return cn.gilight.commons.DateUtils.getDateFormat(cn.gilight.commons.DateUtils.getDate(datetime), format);
	}
	
	public static Calendar getCalendar(String date,String format) throws ParseException{
		Calendar calendar = Calendar.getInstance();
		DateFormat df = new SimpleDateFormat(format);
		calendar.setTime(df.parse(date));
		return calendar;
	}
	
	/**
	 * 获取周次
	 * 转换为周几概念,其中周日为0,依照西方观念
	 * @return
	 * @throws ParseException 
	 */
	public static int getWeek(String date) throws ParseException{
		Calendar calendar = DateUtils.getCalendar(date, "yyyy-MM-dd");
		int week = calendar.get(Calendar.DAY_OF_WEEK);
		week -= 1;
		return week;
	}
}
