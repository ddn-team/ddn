var Pcm = Pcm || {};
Pcm.constant = Pcm.constant || {};
/**
 * 常量维护-适用于Storage(存储)
 */
(function(){
	Pcm.constant.Storage = {
			/*** 用户信息key */
			key_user : "user",
			/*** 主题 */
			theme    : "theme",
			/*** 登陆设置 */
			login_setting : "login_setting",
			/*** 用户登陆后缓存信息 */
			key_login_userinfo:'userInfo',
			index_short:'index_short',
			index_me   :'index_me',
			index_eye  :'index_eye',
			/*** 随机码(整数) */
			random:'random'
	};
	
	Pcm.constant.S = Pcm.constant.Storage;
})();