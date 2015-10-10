var Pcm = Pcm || {};
Pcm.sys = Pcm.sys || {};
(function(){
	Pcm.sys.User = {
		set:function(info){
			Pcm.storage.setSMap(Pcm.constant.S.key_login_userinfo,info);
		},
		get:function(){
			var info = Pcm.storage.getSMap(Pcm.constant.S.key_login_userinfo);
			return info == null ? {} : info;
		},
		getUserId:function(){
			var info = this.get();
			return info['id'];
		}
	};
})();