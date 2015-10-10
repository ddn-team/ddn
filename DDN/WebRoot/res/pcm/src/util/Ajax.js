/**
 * ajax相关工具类
 */
//兼容
var Pcm = Pcm || {};
Pcm.util = Pcm.util || {};
(function() {
	
	
	var Constants = {
		/** * 执行类型 */
		DO_TYPE : {
			web : "web",
			mobile : "webapp"
		}
	};
	// 这里进行webApp、网站(web)的判断
	if (!window.$profile) {
		if (window.jGate) {// 当且仅当与WebApp时生效
			eval("window.$profile=" + window.jGate.getProfile());// Android
																	// 给定的信息
		} else {
			var loc = window.document.location, href = loc.href, pathname = loc.pathname, pos = href
					.indexOf(pathname), local = href.substring(0, pos), proname = pathname
					.substring(0, pathname.substr(1).indexOf('/') + 1);
			window.$profile = {
				basePath : local + proname + "/",
				uri : "/controller/core",
				batchuri:'/controller/core_batch',
				doType : Constants.DO_TYPE.web
			};
		}
	}
	var lockMap = {};
	Pcm.util.Ajax = {
		/**
		 * ajax请求,与PCM后台MVC产生耦合,仅在项目中使用！
		 * 
		 * @param config 
		 * 格式1:
		 * {
		 *    loadmore:jquery对象,//用于分页页面控制
		 * 	  server:'server名称',
		 *    method:'server中的方法名称',
		 *    params:[],//方法对应的参数,方法有几个参数,则数组中传递几个参数
		 *    success:function(data){
		 *    	//成功方法回调, 参数data为后台server方法执行的结果.类型也保持对应
		 *    },
		 *    failure:function(){
		 *      //失败、异常、数据错误等情况的回调处理
		 *    }
		 * }
		 * 格式2:
		 * {
		 * 	 muti:[{
		 * 		key:'key1',
		 *      server:'',
		 *      method:'',
		 *      params:[]
		 * 	 }]
		 * }
		 */
		postMVC : function(config) {

			config = config || {};
			var server = config['server'], method = config['method'], params = config['params']
					|| [], muti= config['muti'],success = config["success"] || function() {
			}, failure = config["failure"] || function() {},noAlert = config['noAlert'],sessionDataFn = config['sessionDataFn'] || function(){return null;};
			var isMuti = (typeof muti != 'undefined' && muti instanceof Array);
			
			if(!isMuti){//如果不是批量请求
				if (!server || !method) {
					alert('参数传递有误! \n格式: \n{\nserver:"xxService",\nmethod:"methodName",\nparams:[param1,param2]\n}');
					return;
				}
				if (!(params instanceof Array)) {
					alert('params参数数据类型应为数组(Array、[])');
					return;
				}
			}else{
				var m,p,k,s,me;
				for(var i=0,len = muti.length;i<len;i++){
					m = muti[i];
					p = m['params'];
					k = m['key'];
					s = m['server'];
					me = m['method'];
					if(!k){alert("请指定key.");}
					if(!s || !me){alert("参数格式有误,请参照接口说明.");}
					if(!(p instanceof Array)){muti[i]['params'] = [];}
				}
			}
			var _c = {};
			for(var k in config){
				if(config[k] instanceof Function){continue;}
				_c[k] = config[k];
			}
			var _key = JSON.stringify(_c);
			if(lockMap[_key]){return;}else{lockMap[_key] = true;}
			
			
			//增加对session数据的回调支持
			var sessionData = sessionDataFn.call(this);
			if(sessionData != null && sessionData.length > 0){success.call(this,sessionData);return;}
			
			
			var doType = window.$profile.doType || Constants.DO_TYPE.web, me = this;
			if (doType == Constants.DO_TYPE.mobile) { // webApp执行->好像没关系了
				setTimeout(function() {
					
					var str = prompt("AJAX_POST_MVC:" + JSON.stringify(isMuti ? {muti : JSON.stringify(muti)} : {
						server : server,
						method : method,
						params : JSON.stringify(params)
					}));
					var data = JSON.parse(str);
					delete lockMap[_key];
					if (data["code"] == "success") {
						success.call(me, data["result"]);
					} else {
						var failMsg = data["result"] || "服务器异常!";
						failure.call(me, failMsg);
						if(!noAlert)alert(failMsg);
					}
				}, 1);
			} else if (doType == Constants.DO_TYPE.web) {// 微网站执行
				if (!$) { alert('该页面依赖 jquery 类库'); return; }
				//if(!navigator.onLine) {  alert('请确认您的设备正常连接网络.'); return; }
				
				$.post(window.$profile["basePath"] + window.$profile[isMuti ? "batchuri" : "uri"],isMuti ? {muti:JSON.stringify(muti)} : {
					server : server,
					method : method,
					params : JSON.stringify(params)
				}, function(data) {
					
					delete lockMap[_key];
					
					if (data["code"] == "success") {
						success.call(this, data["result"]);
					} else {
						var failMsg = data["result"] || "服务器异常!";
						failure.call(this, failMsg);
						if(!noAlert)alert(failMsg);
					}
				});
			}

		},
		/**
		 * 批量AJAX请求(依赖MVC)
		 */
		postMuti:function(config){
			
		}
	};
	
	//快捷
	Pcm.ajax = Pcm.util.Ajax;
})();