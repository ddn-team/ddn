/**
 * 浏览器相关工具类
 */
var Pcm = Pcm || {};
Pcm.util = Pcm.util || {};
(function() {
	var userAgent = navigator.userAgent;
	var agents = [ "iphone", "ipad", "ipod", "wp7", "android", "blackberry", "Spark", "warning", "symbian", "SymbianOS", "Windows Phone"];
	
	Pcm.util.Browser = {
		/**
		 * 是否是PC端浏览器
		 * @returns {Boolean}
		 */
		isPC : function() {
			var flag = true;
			for ( var v = 0; v < agents.length; v++) {
				if (userAgent.toLowerCase().indexOf(agents[v]) > 0) {
					flag = false; break;
				}
			}
			return flag;
		},
		/**
		 * 是否是移动设备浏览器
		 * @returns {Boolean}
		 */
		isMobile:function(){
			return !(this.isPC());
		},
		/**
		 * 是否是safari浏览器
		 * @returns {Boolean}
		 */
		isSafari:function(){
			return userAgent.indexOf("Safari") > -1 ;
		},
		/**
		 * 是否webapp访问
		 * @returns {Boolean}
		 */
		isWebApp:function(){
			return window.jGate ? true : false;
		},
		/**
		 * 是否微信平台
		 */
		isWechat:function(){
			var ua = window.navigator.userAgent.toLowerCase();
		    return ua.match(/MicroMessenger/i) == 'micromessenger';
		}
	};
	
	//快捷
	Pcm.browser = Pcm.util.Browser;
})();