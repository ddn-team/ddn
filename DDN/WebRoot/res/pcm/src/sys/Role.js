var Pcm = Pcm || {};
Pcm.sys = Pcm.sys || {};

(function(){
	/**
	 * 是否包含
	 * @param {Object} ele 数组内元素
	 * @param {Array} arrs 数组对象
	 */
	var isContainer = function(ele,arrs){
		var flag = false;
		for(var i=0,len = arrs.length; i<len; i++){
			if(ele == arrs[i]){ flag = true; break;}
		}
		return flag;
	};
	
	Pcm.sys.Role = {
		/**
		 * 获取角色类型
		 * @returns {Array}
		 */
		getRoleTypes:function(){
			var info = Pcm.sys.User.get(),roles = info['roles'] || [],types=[];
			for(var i=0,len = roles.length;i<len;i++){
				types.push(roles[i]['roleType']);
			}
			return types;
		},
		/**
		 * 是否是管理员
		 * @returns {Boolean}
		 */
		isAdmin:function(){
			return isContainer('A', this.getRoleTypes());
		},
		/**
		 * 是否是学生
		 * @returns {Boolean}
		 */
		isStudent:function(){
			return isContainer('S', this.getRoleTypes());
		}
	};
})();