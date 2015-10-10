var Pcm = Pcm || {};
Pcm.util = Pcm.util || {};
(function(){
	Pcm.util.Net = {
			isNetworkConnection:function(){
				//TODO 浏览器下,使用html5指定判断方式  webview暂未做
				// Offline.js 
				return navigator.onLine;
			}
	};
	
	Pcm.net = Pcm.util.Net;
})();