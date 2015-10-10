var Pcm = Pcm || {};
Pcm.util = Pcm.util || {};
(function(){
	Pcm.util.Array = {
			/**
			 * 一维数组转二维数组
			 * var array = [1,2,3,4,5,6];
			 * o2t(array,3); [[1,2,3],[4,5,6]];
			 * @param {Array} array 
			 * @param {Number} cell
			 */
			o2t:function(array,cell){
				if(!array || !cell){ throw '参数不符合要求.';}
				var tArray = [],time = 0;
				for(var i =0,len = array.length;i<len;i++){
					if(i % cell == 0){ tArray.push([]); time++;}
					tArray[time - 1].push(array[i]);
				}
				return tArray;
			},
			/**
			 * 获取指定itemKey的元素数组
			 * @param {Array} array
			 * @param {Object} itemKey(array子项的key)
			 * @return {Array}
			 */
			kArray:function(array,itemKey){
				var kArray = [];
				for(var i=0,len = array.length;i<len;i++){
					kArray.push(array[i][itemKey]);
				}
				return kArray;
			},
			/**
			 * 循环遍历
			 * @param {Array} array
			 * @param {Function} callback
			 * @param {Object} scope
			 */
			each:function(array,callback,scope){
				for(var i=0,len = array.length;i<len;i++){
					callback.call(scope||this,array[i],i);
				}
			},
			/**
			 * 改变数组子元素
			 * @param {Array} array
			 * @param {Function} callback 需要返回值
			 * @param {Object} scope
			 */
			changeItem:function(array,callback,scope){
				this.each(array, function(item,i){
					array.splice(i,1,callback.call(scope||this,item,i));
				});
			},
			isContainer:function(array,value){
				var container = false,v;
				for(var i=0,len = array.length;i<len;i++){
					v = value[i];
					if(v == value){container = true; break;}
				}
				return container;
			}
	};
	Pcm.array = Pcm.util.Array;
})();