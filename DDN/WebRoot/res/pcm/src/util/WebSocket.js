var Pcm = Pcm || {};
Pcm.util = Pcm.util || {};
(function(){
	
	/**
	 *  config = {
	 * 	 	url : 'websocket连接地址',
	 *   	onerror: function(){},
	 *   	onopen : function(){},
	 *   	onmessage:function(){},
	 *  	onclose:function(){}
	 *  }
	 */
	Pcm.util.WebSocket = function(config){
		//浏览器支持webSocket
		if ("WebSocket" in window) {
			var  url = config.url
				,onerror  = config.onerror  || function(){}
			    ,onopen   = config.onopen   || function(){}
			    ,onmessage= config.onmessage|| function(){}
			    ,onclose  = config.onclose  || function(){}
			    ,shortmsg = config.shortmsg
			    ;
			var ws = new WebSocket(url);
			ws.onerror  = onerror;
			ws.onopen   = onopen;
			ws.onclose  = onclose;
			//TODO 做转换 onText,onPicture,onVoice,等等
			ws.onmessage= function(event){
				if(shortmsg){
					var data = JSON.parse(event.data);
					shortmsg.call(ws,data,event.type);
				}else{
					onmessage.call(ws,{ type:event.type, data:event.data });
				}
			};
			
			this.send = function (message, callback) {
			    this.waitForConnection(function () {
			        ws.send(message);
			        if (typeof callback !== 'undefined') {
			          callback();
			        }
			    }, 1000);
			};

			this.waitForConnection = function (callback, interval) {
			    if (ws.readyState === 1) {
			        callback();
			    } else {
			        var that = this;
			        setTimeout(function () {
			            that.waitForConnection(callback, interval);
			        }, interval);
			    }
			};
			
			/*this.ident = function () {
			    var session = "Test";
			    this.send(session, function () {
			        window.identified = true;
			        theText.value = "Hello!";
			        say.click();
			        theText.disabled = false;
			    });
			};*/
		}
	};
	
	Pcm.ws = Pcm.util.WebSocket;
})();