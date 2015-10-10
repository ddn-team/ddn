/**
 * ajax相关工具类
 */
//兼容
var Pcm = Pcm || {};
Pcm.util = Pcm.util || {};
(function() {
	Pcm.util.Id = {
			next:(function(){  
			    var id = 100;  
			    var getId = function(){  
			        id += 1;  
			        return 'id_' + id;  
			    };  
			    return getId;  
			})()
	};
	
	//快捷
	Pcm.id = Pcm.util.Id;
})();