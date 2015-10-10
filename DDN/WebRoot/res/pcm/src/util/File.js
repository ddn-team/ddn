var Pcm = Pcm || {};
Pcm.util = Pcm.util || {};
(function(){
	var loc = window.document.location, href = loc.href, pathname = loc.pathname, pos = href.indexOf(pathname), local = href.substring(0, pos), proname = pathname.substring(0, pathname.substr(1).indexOf('/') + 1);
	var basePath = local + proname;
	
	Pcm.util.File = {
			/**
			 * 加载本地资源(支持JS\CSS)
			 * @param {String|Array} param 资源相对于WebRoot的路径
			 */
			load:function(){
				var param = arguments[0],srcs = [],src;
				if(param){
					if(typeof param == 'string'){ srcs.push(param); }else
					if(param instanceof Array) { srcs = param;	   }
					var head = document.getElementsByTagName("head").item(0);
					
					for(var i=0,len = srcs.length;i<len;i++){
						src = srcs[i];
						var obj  = null;
						if(new RegExp(".js$").test(src)){
							var script = document.createElement('script');
							    script.setAttribute("type","text/javascript");
							    script.setAttribute("src", basePath + "/" + src);
							obj = script;
						}else if(new RegExp(".css$").test(src)){
							var style=document.createElement("link");
							style.setAttribute("rel", "stylesheet");
							style.setAttribute("type", "text/css");
							style.setAttribute("href", basePath + "/" + src);
							obj = style;
						}
						if(null != obj){ head.appendChild(obj); }
					}
				}
			}
	};
	//快捷
	Pcm.file = Pcm.util.File;
})();