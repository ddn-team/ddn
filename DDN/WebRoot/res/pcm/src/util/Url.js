/**
 * URL处理工具类
 */
//兼容
var Pcm = Pcm || {};
Pcm.util = Pcm.util || {};
(function(){
	
	
	Pcm.util.Url = {
			basePath:(function(){
				var loc = window.document.location, href = loc.href, pathname = loc.pathname, pos = href
				.indexOf(pathname), local = href.substring(0, pos), proname = pathname
				.substring(0, pathname.substr(1).indexOf('/') + 1);
				if(window.$profile){
					return window.$profile["basePath"];
				}
				return (local + proname + "/");
			})(),
			pathname:(function(){
				return window.document.location.pathname;
			})(),
			/**
			 * 获取参数值
			 * @param name
			 * @return
			 */
			getQueryString : function(name,isCh) {
				if(typeof isCh === 'undefined'){isCh = false;}
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
				var r = window.location.search.substr(1).match(reg);
				if (r != null) return isCh?decodeURI(r[2]) : unescape(r[2]);
				return null;
			},
			/**
			 * 页面地址替换(history自动清除当前页,更换为url)
			 */
			replace:function(url){
				if(Pcm.string.endWith(url,'.html')){ url += ('?__random=' + Pcm.storage.getSNumber(Pcm.constant.S.random));}
				window.location.replace(url);
			},
			/**
			 * 页面跳转
			 * @param url
			 */
			href:function(url,target){
				//TODO $.mobile.navigate
				target = target ||'_self';
				if(url)this.go(url,target);
			},
			/**
			 * 页面跳转
			 * @param url
			 */
			go:function(url,target){
				target = target ||'_self';
				//页面跳转->页面缓存部分add
				if(target == '_self'){
					//解决登入后失效,再次访问时访问缓存(导致重复登录)的问题
					if(Pcm.string.endWith(url,'.html')){ url += ('?__random=' + Pcm.storage.getSNumber(Pcm.constant.S.random));}
					window.location.href = url;
				}else if(target == '_blank'){
					window.open(url);//TODO 在混合里,新的WebActivity
				}
			},
			/**
			 * 页面关闭
			 */
			close:function(){
				if(Pcm.browser.isWebApp()){
					//webapp
					window.jGate.close();
				}else{
					//web 跳转到 首页
					this.back();
					//window.location.href = this.basePath + "page/index.html";
				}
			},
			/**
			 * 页面返回
			 */
			back:function(){
				window.history.back();
			},
			/**
			 * 下载
			 * @param url
			 */
			download:function(url){
				if(Pcm.browser.isWebApp()){//如果是WebApp
					//手机端下载调用
				}else{
					//或执行统一的ajax下载、或浏览器默认行为下载
					window.open(url);
				}
			},
			/**
			 * 用于获取系统中img的src地址
			 * @param url 系统指示地址
			 * @param p 像素
			 */
			getImgSrc:function(url,p){
				//TODO 现在只处理web下地址 webapp下 需要增加
				if(url == null || '' == url){return '';}
				if(typeof p == 'undefined'){ p = '';}
				//webapp下: 1、file:///android_asset/url	2、本机   3、网络,但同时要异步执行本地存储
				return window.$profile["basePath"] + 'FileAccessServlet.do?url='+ url +'&p='+ p;
			},
			getFileSrc:function(){
				if(url == null || '' == url){return '';}
				return window.$profile["basePath"] + 'FileAccessServlet.do?url='+ url;
			}
	};
	
	//快捷
	Pcm.url = Pcm.util.Url;
})();