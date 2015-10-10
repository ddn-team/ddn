var Pcm = Pcm || {};
Pcm.util = Pcm.util || {};
/**
 * 本地存储工具类
 */
(function() {
	
	Pcm.util.Storage = {
		removeL:function(key){
			this.__db.removeItem(key);
		},
		removeS:function(key){
			this.__cache.removeItem(key);
		},
		setLString : function(key,value) {
			if(typeof value == "string"){ this.__db.setItem(key,value); }
			return value;
		},
		setLNumber : function(key,value) {
			if(typeof value == "number"){ this.__db.setItem(key,value); }
			return value;
		},
		setLMap : function(key,value) {
			this.__db.setItem(key,JSON.stringify(value));
			return value;
		},
		/**
		 * 作废
		 * @param key
		 * @param value
		 * @returns {Object}
		 */
		setLArray:function(key,value){
			if(value instanceof Array){ this.__db.setItem(key,value); }
			return value;
		},
		getLString : function(key) {
			return this.__db.getItem(key);
		},
		getLNumber : function(key) {
			var value = this.__db.getItem(key);
			return value == null ? null : Number(value);
		},
		/**
		 * 得到Map对象,默认null
		 * @param key
		 * @returns {Object}
		 */
		getLMap : function(key) {
			var value = this.__db.getItem(key);
			return value == null ? null : JSON.parse(value);
		},
		/*** 得到字符串数组（作废 使用Map） */
		getLArray:function(key){
			var str = this.__db.getItem(key) == null ? '':this.__db.getItem(key);
			return str.split(",");
		},
		clearS:function(){
			this.__cache.clear();
		},
		/**
		 * 设置缓存值(sessionStorage)
		 * @param key
		 * @param value
		 */
		setSString:function(key,value){
			if(typeof value == "string"){ this.__cache.setItem(key,value); }
		},
		getSString:function(key){
			return this.__cache.getItem(key);
		},
		setSNumber:function(key,value){
			if(typeof value == 'number'){ this.__cache.setItem(key,value);}
		},
		getSNumber:function(key){
			var value = this.__cache.getItem(key);
			return value == null ? null : Number(value);
		},
		setSMap:function(key,value){
			this.__cache.setItem(key,JSON.stringify(value));
		},
		getSMap:function(key){
			var value = this.__cache.getItem(key);
			return value == null ? null : JSON.parse(value);
		},
		setSObject:function(key,value){
			this.__cache.setItem(key,JSON.stringify(value));
		},
		getSObject:function(key){
			var value = this.__cache.getItem(key);
			return value == null ? null : JSON.parse(value);
		}
	};
	var temp = {__s:{},clear:function(){this.__s = {};},setItem:function(k,v){this.__s[k] = v;},getItem:function(k){ return this.__s[k];}};
	if(!Pcm.util.Storage.__db){
		//如果浏览器不支持localStorage,则进行转换为当前页面的对象缓存
		try{
			Pcm.util.Storage.__db = window.localStorage ;
		}catch(e){
			Pcm.util.Storage.__db = temp;
		}
	}
	if(!Pcm.util.Storage.__cache){
		try{
			Pcm.util.Storage.__cache = window.sessionStorage;
		}catch(e){
			Pcm.util.Storage.__cache = temp;
		}
	}
	//兼容性提示(1、不支持localStorage;2、私有浏览模式下不支持)
	try {
		if (typeof localStorage === 'object') {
			localStorage.setItem('localStorage', 1);
			localStorage.removeItem('localStorage');
		}
    } catch (e) {
        Storage.prototype._setItem = Storage.prototype.setItem;
        Storage.prototype.setItem = function() {};
        //判断 微信 、 safari 等 若您使用Safari浏览器,请勿使用 "隐私浏览模式".否则将无法正常访问本系统.
        //alert('您的浏览器不支持本地存储.');
    }
	
	Pcm.storage = Pcm.util.Storage;
})();