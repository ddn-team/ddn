var Pcm = Pcm || {};
Pcm.ui = Pcm.ui || {};
(function(){
	Pcm.ui.Toast = function(){
		this.$msg = null;
	};
	Pcm.ui.Toast.prototype = {
		_doConfig:function(config){
			  
			this.context = config.context||$('body');//上下文  
		    this.message = config.message;//显示内容  
		    this.time    = config.time||3500;//持续时间  
		    this.left    = config.left;//距容器左边的距离  
		    this.top     = config.top;//距容器上方的距离  
		    this.callback= config.callback || function(){};
		},
	    //初始化显示的位置内容等  
	    _build : function(config){
	    	this._doConfig(config);
	    	if(this.$msg != null){ $msg.remove();}
	    	//设置消息体  
    		this.$msg = $('<div><span>'+ this.message +'</span></div>').appendTo(this.context);  
    		//设置消息样式 
    		if('top' == this.top){ this.top = 20;}else 
    		if('bottom' == this.top){ this.time = this.context.height() - 20 ;}
    		var left = this.left || ((this.context.width() - this.$msg.find('span').width())/2 - 20),
		        top  = this.top  || this.context.height()/2;//'20px'; 
    		
    		this.$msg.css({position:'absolute',top:top,'z-index':'999',left:left,'background-color':'black',color:'white','font-size':'18px',padding:'10px',margin:'10px'});  
	    },  
	    //显示动画  
	    show :function(config){
	    	var me = this;
	    	this._build(config||{});  
	    	this.$msg.fadeIn(1500);  
	    	this.$msg.fadeOut(Math.abs(this.time - 1500),function(){me.callback(); });  
	    }
	   };
	//快捷提示,默认context是body,如果其他context,请重新new
	Pcm.toast = new Pcm.ui.Toast();
})();