/**
 * 日期相关工具类
 */
//兼容
var Pcm = Pcm || {};
Pcm.util = Pcm.util || {};
(function() {

	Pcm.util.Date = {
		/**
		 * 将time转成Date对象
		 * @param {Date|Number|String} time
		 * @return {Date}
		 */
		getDate:function(time){
			time = time || new Date();
			return (time instanceof Date) ? time: ((typeof (time) === 'number') ? new Date(time): (new Date((time || "").replace(/-/g, "/")))); // 传递的时间(yyyy-MM-dd hh:ii:ss)的组合形式
		},
		/**
		 * 日期格式化(与Java日期格式化相同)
		 * @param {Date} date
		 * @param {String} fmt
		 * @return {String}
		 */
		format : function(date, fmt) {
			var o = {
				"M+" : (date.getMonth() + 1),// 月份  >9?date.getMonth()+1:'0'+(date.getMonth()+1)
				"d+" : date.getDate(),// 日 >9?date.getDate():'0'+date.getDate()
				"h+" : date.getHours(), // 小时 >9?date.getHours():'0'+date.getHours()
				"i+" : date.getMinutes(), // 分  >9?date.getMinutes():'0'+date.getMinutes()
				"s+" : date.getSeconds(), // 秒
				"q+" : Math.floor((date.getMonth() + 3) / 3), // 季度
				"S" : date.getMilliseconds() 	// 毫秒
			};
			if (/(y+)/.test(fmt)) {
				fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
			}
			for ( var k in o) {
				if (new RegExp("(" + k + ")").test(fmt)) {
					fmt = fmt.replace(RegExp.$1,(RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
				}
			}
			return fmt;
		},
		/**
		 * 将时间点(戳)转换为时间轴
		 * @param {Date|Number|String} time
		 * @return {String}
		 */
		prettyDate : function(time) {
			var date = this.getDate(time), // 传递的时间(yyyy-MM-dd hh:ii:ss)的组合形式
				diff = (((new Date()).getTime() - date.getTime()) / 1000), // 当前时间与传递时间间隔(秒)
			day_diff = Math.floor(Math.abs(diff) / 86400), // 转换为天
				unit = '前', // 单位(扩展支持 未来时间)
			isReversal = (diff < 0) ? true : false; // 是否需要翻转(之前和之后)
			
			// 昨天-明天 % 前天-后天
			if (isReversal) {
				unit = '后';
				diff = Math.abs(diff);
			}

			var year = date.getFullYear(), month = date.getMonth() + 1;
			var days = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
			if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
				days[1] = 29;
			}

			if (isNaN(day_diff)) { 	return ''; }
			
			if (day_diff >= 7) {// 以下需要选择 一个策略 来判断 ,同时应该还需要formater日期
				// 如果在本月
				if (day_diff < days[month]) {
					return Math.ceil(day_diff / 7) + "周" + unit;
				}
				// 如果在三个月内(可以再优化,不精准,另外还要解决下【跨年】的问题->所以此处还可以优化)
				var daysTotal = 0, temp = 0;
				for ( var i = month; i < (month + 3); i++) {
					temp = i;
					if (temp >= 12) {
						temp = temp - 12;
					}
					daysTotal += days[temp];
				}
				if (day_diff < daysTotal) {
					return '约' + Math.floor(day_diff / 30) + '个月' + unit;
				}

				return this.format(date, "yyyy-MM-dd");// 格式化函数进行格式化
			}
			// 三天内的判断
			return (diff < 60 && "刚刚" || diff < 120 && ("1分钟" + unit)
					|| diff < 3600 && (Math.floor(diff / 60) + "分钟" + unit)
					|| diff < 7200 && ("1小时" + unit) || diff < 86400
					&& (Math.floor(diff / 3600) + "小时" + unit))
					|| day_diff == 1
					&& ((isReversal ? "明天" : "昨天") + this.format(date, 'hh:ii'))
					|| day_diff == 2
					&& (isReversal ? "后天" : "前天")
					|| day_diff < 7 && (day_diff + "天" + unit);
		},
		
		/**
		 * 将时间点(戳)转换为时间轴
		 * @param {Date|Number|String} time
		 * @return {String}
		 */
		perttyDate4Day:function(time){
			var date = this.getDate(time); // 传递的时间(yyyy-MM-dd hh:ii:ss)的组合形式
			var todaystr=this.format(new Date(),"yyyy-MM-dd"); 
			var todaydate=new Date(todaystr.replace(/-/g, "/"));//得到今天的date形式.	
			var daydiff=24*60*60*1000;
			var diff=date.getTime()-todaydate.getTime();
			if(date.getFullYear()-todaydate.getFullYear()===0){//对本年只输出"月-日"
				if(diff>=0&&diff<daydiff){//今天
					return "tdy";
				}else if(diff>=daydiff && diff < daydiff*2){//明天
					return "tmw";
				}else if(diff>=2*daydiff && diff < daydiff*3){//后天
					return "tdat";
				}else if(diff>=(-1)*daydiff&&diff<0){//昨天
					return "ydy";
				}else if(diff>=(-2)*daydiff && diff < daydiff*(-1)){//前天
					return "tdby";
				}else { //只有"月-日".
					return this.format(date,"MM-dd");
				}
			}else{//返回"年-月-日"
				return this.format(date,"yyyy-MM-dd");
			}			
		},
		/**
		 * 只得到给定时间点的时分：hh:ii
		 * @param {Date|Number|String} time
		 * @return {String}
		 */
		getHM:function(time){
			var date = this.getDate(time);
			return this.format(date,"hh:ii");
		},
		/**
		 * 判断给定的时间是否早于当前时间(过时)
		 * @param {Date|Number|String} time
		 * @return boolean true:早于,false:不早于
		 */
		isOutTime:function(time){
			var date = this.getDate(time);
			var now= new Date();
			return date.getTime()<now.getTime()?true:false;
		}
	};	
	
	// 快捷
	Pcm.date = Pcm.util.Date;
})();