
//第一个

$(document).ready(function(){
		$("#zzsc").find(".pre").hide();//初始化为第一版
		var page=1;//初始化当前的版面为1
		var $show=$("#zzsc").find(".zzsc_box");//找到图片展示区域
		var page_count=$show.find("ul").length;
		var $width_box=$show.parents("#wai_box").width();//找到图片展示区域外围的div
		//显示title文字
		$show.find("li").hover(function(){
			$(this).find(".title").show();								
		},function(){
			$(this).find(".title").hide();
		})
		function nav(){
			if(page==1){
				$("#zzsc").find(".pre").hide().siblings(".next").show();
			}
			else if(page==page_count){
				$("#zzsc").find(".next").hide().siblings(".pre").show();
			}
			else{
				$("#zzsc").find(".pre").show().siblings(".next").show();
			}
		}
		$("#zzsc").find(".next").click(function(){
			//首先判断展示区域是否处于动画
			if(!$show.is(":animated")){
				$show.animate({left:'-='+$width_box},"normal");
				page++;
				nav();
				$number=page-1;
				$("#zzsc").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
				return false;
			}
		})
		$("#zzsc").find(".pre").click(function(){
		if(!$show.is(":animated")){
			$show.animate({left:'+='+$width_box},"normal");
			page--;
			nav();
			$number=page-1;
			$("#zzsc").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
			}
			return false;
		})
		$("#zzsc").find(".nav a").click(function(){
				$index=$(this).index();
				page=$index+1;
				nav();
				$show.animate({left:-($width_box*$index)},"normal");	
				$(this).addClass("now").siblings("a").removeClass("now");
				return false;
		})
						   
});



//第二个
$(document).ready(function(){
		$("#zzsc02").find(".pre").hide();//初始化为第一版
		var page=1;//初始化当前的版面为1
		var $show=$("#zzsc02").find(".zzsc_box");//找到图片展示区域
		var page_count=$show.find("ul").length;
		var $width_box=$show.parents("#wai_box").width();//找到图片展示区域外围的div
		//显示title文字
		$show.find("li").hover(function(){
			$(this).find(".title").show();								
		},function(){
			$(this).find(".title").hide();
		})
		function nav(){
			if(page==1){
				$("#zzsc02").find(".pre").hide().siblings(".next").show();
			}
			else if(page==page_count){
				$("#zzsc02").find(".next").hide().siblings(".pre").show();
			}
			else{
				$("#zzsc02").find(".pre").show().siblings(".next").show();
			}
		}
		$("#zzsc02").find(".next").click(function(){
			//首先判断展示区域是否处于动画
			if(!$show.is(":animated")){
				$show.animate({left:'-='+$width_box},"normal");
				page++;
				nav();
				$number=page-1;
				$("#zzsc02").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
				return false;
			}
		})
		$("#zzsc02").find(".pre").click(function(){
		if(!$show.is(":animated")){
			$show.animate({left:'+='+$width_box},"normal");
			page--;
			nav();
			$number=page-1;
			$("#zzsc02").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
			}
			return false;
		})
		$("#zzsc02").find(".nav a").click(function(){
				$index=$(this).index();
				page=$index+1;
				nav();
				$show.animate({left:-($width_box*$index)},"normal");	
				$(this).addClass("now").siblings("a").removeClass("now");
				return false;
		})
						   
});




//第3个
$(document).ready(function(){
		$("#zzsc03").find(".pre").hide();//初始化为第一版
		var page=1;//初始化当前的版面为1
		var $show=$("#zzsc03").find(".zzsc_box");//找到图片展示区域
		var page_count=$show.find("ul").length;
		var $width_box=$show.parents("#wai_box").width();//找到图片展示区域外围的div
		//显示title文字
		$show.find("li").hover(function(){
			$(this).find(".title").show();								
		},function(){
			$(this).find(".title").hide();
		})
		function nav(){
			if(page==1){
				$("#zzsc03").find(".pre").hide().siblings(".next").show();
			}
			else if(page==page_count){
				$("#zzsc03").find(".next").hide().siblings(".pre").show();
			}
			else{
				$("#zzsc03").find(".pre").show().siblings(".next").show();
			}
		}
		$("#zzsc03").find(".next").click(function(){
			//首先判断展示区域是否处于动画
			if(!$show.is(":animated")){
				$show.animate({left:'-='+$width_box},"normal");
				page++;
				nav();
				$number=page-1;
				$("#zzsc03").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
				return false;
			}
		})
		$("#zzsc03").find(".pre").click(function(){
		if(!$show.is(":animated")){
			$show.animate({left:'+='+$width_box},"normal");
			page--;
			nav();
			$number=page-1;
			$("#zzsc03").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
			}
			return false;
		})
		$("#zzsc03").find(".nav a").click(function(){
				$index=$(this).index();
				page=$index+1;
				nav();
				$show.animate({left:-($width_box*$index)},"normal");	
				$(this).addClass("now").siblings("a").removeClass("now");
				return false;
		})
						   
});




//第4个
$(document).ready(function(){
		$("#zzsc04").find(".pre").hide();//初始化为第一版
		var page=1;//初始化当前的版面为1
		var $show=$("#zzsc04").find(".zzsc_box");//找到图片展示区域
		var page_count=$show.find("ul").length;
		var $width_box=$show.parents("#wai_box").width();//找到图片展示区域外围的div
		//显示title文字
		$show.find("li").hover(function(){
			$(this).find(".title").show();								
		},function(){
			$(this).find(".title").hide();
		})
		function nav(){
			if(page==1){
				$("#zzsc04").find(".pre").hide().siblings(".next").show();
			}
			else if(page==page_count){
				$("#zzsc04").find(".next").hide().siblings(".pre").show();
			}
			else{
				$("#zzsc04").find(".pre").show().siblings(".next").show();
			}
		}
		$("#zzsc04").find(".next").click(function(){
			//首先判断展示区域是否处于动画
			if(!$show.is(":animated")){
				$show.animate({left:'-='+$width_box},"normal");
				page++;
				nav();
				$number=page-1;
				$("#zzsc04").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
				return false;
			}
		})
		$("#zzsc04").find(".pre").click(function(){
		if(!$show.is(":animated")){
			$show.animate({left:'+='+$width_box},"normal");
			page--;
			nav();
			$number=page-1;
			$("#zzsc04").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
			}
			return false;
		})
		$("#zzsc04").find(".nav a").click(function(){
				$index=$(this).index();
				page=$index+1;
				nav();
				$show.animate({left:-($width_box*$index)},"normal");	
				$(this).addClass("now").siblings("a").removeClass("now");
				return false;
		})
						   
});



//第5个
$(document).ready(function(){
		$("#zzsc05").find(".pre").hide();//初始化为第一版
		var page=1;//初始化当前的版面为1
		var $show=$("#zzsc05").find(".zzsc_box");//找到图片展示区域
		var page_count=$show.find("ul").length;
		var $width_box=$show.parents("#wai_box").width();//找到图片展示区域外围的div
		//显示title文字
		$show.find("li").hover(function(){
			$(this).find(".title").show();								
		},function(){
			$(this).find(".title").hide();
		})
		function nav(){
			if(page==1){
				$("#zzsc05").find(".pre").hide().siblings(".next").show();
			}
			else if(page==page_count){
				$("#zzsc05").find(".next").hide().siblings(".pre").show();
			}
			else{
				$("#zzsc05").find(".pre").show().siblings(".next").show();
			}
		}
		$("#zzsc05").find(".next").click(function(){
			//首先判断展示区域是否处于动画
			if(!$show.is(":animated")){
				$show.animate({left:'-='+$width_box},"normal");
				page++;
				nav();
				$number=page-1;
				$("#zzsc05").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
				return false;
			}
		})
		$("#zzsc05").find(".pre").click(function(){
		if(!$show.is(":animated")){
			$show.animate({left:'+='+$width_box},"normal");
			page--;
			nav();
			$number=page-1;
			$("#zzsc05").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
			}
			return false;
		})
		$("#zzsc05").find(".nav a").click(function(){
				$index=$(this).index();
				page=$index+1;
				nav();
				$show.animate({left:-($width_box*$index)},"normal");	
				$(this).addClass("now").siblings("a").removeClass("now");
				return false;
		})
						   
});



//第6个
$(document).ready(function(){
		$("#zzsc06").find(".pre").hide();//初始化为第一版
		var page=1;//初始化当前的版面为1
		var $show=$("#zzsc06").find(".zzsc_box");//找到图片展示区域
		var page_count=$show.find("ul").length;
		var $width_box=$show.parents("#wai_box").width();//找到图片展示区域外围的div
		//显示title文字
		$show.find("li").hover(function(){
			$(this).find(".title").show();								
		},function(){
			$(this).find(".title").hide();
		})
		function nav(){
			if(page==1){
				$("#zzsc06").find(".pre").hide().siblings(".next").show();
			}
			else if(page==page_count){
				$("#zzsc06").find(".next").hide().siblings(".pre").show();
			}
			else{
				$("#zzsc06").find(".pre").show().siblings(".next").show();
			}
		}
		$("#zzsc06").find(".next").click(function(){
			//首先判断展示区域是否处于动画
			if(!$show.is(":animated")){
				$show.animate({left:'-='+$width_box},"normal");
				page++;
				nav();
				$number=page-1;
				$("#zzsc06").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
				return false;
			}
		})
		$("#zzsc06").find(".pre").click(function(){
		if(!$show.is(":animated")){
			$show.animate({left:'+='+$width_box},"normal");
			page--;
			nav();
			$number=page-1;
			$("#zzsc06").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
			}
			return false;
		})
		$("#zzsc06").find(".nav a").click(function(){
				$index=$(this).index();
				page=$index+1;
				nav();
				$show.animate({left:-($width_box*$index)},"normal");	
				$(this).addClass("now").siblings("a").removeClass("now");
				return false;
		})
						   
});



//第7个
$(document).ready(function(){
		$("#zzsc07").find(".pre").hide();//初始化为第一版
		var page=1;//初始化当前的版面为1
		var $show=$("#zzsc07").find(".zzsc_box");//找到图片展示区域
		var page_count=$show.find("ul").length;
		var $width_box=$show.parents("#wai_box").width();//找到图片展示区域外围的div
		//显示title文字
		$show.find("li").hover(function(){
			$(this).find(".title").show();								
		},function(){
			$(this).find(".title").hide();
		})
		function nav(){
			if(page==1){
				$("#zzsc07").find(".pre").hide().siblings(".next").show();
			}
			else if(page==page_count){
				$("#zzsc07").find(".next").hide().siblings(".pre").show();
			}
			else{
				$("#zzsc07").find(".pre").show().siblings(".next").show();
			}
		}
		$("#zzsc07").find(".next").click(function(){
			//首先判断展示区域是否处于动画
			if(!$show.is(":animated")){
				$show.animate({left:'-='+$width_box},"normal");
				page++;
				nav();
				$number=page-1;
				$("#zzsc07").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
				return false;
			}
		})
		$("#zzsc07").find(".pre").click(function(){
		if(!$show.is(":animated")){
			$show.animate({left:'+='+$width_box},"normal");
			page--;
			nav();
			$number=page-1;
			$("#zzsc07").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
			}
			return false;
		})
		$("#zzsc07").find(".nav a").click(function(){
				$index=$(this).index();
				page=$index+1;
				nav();
				$show.animate({left:-($width_box*$index)},"normal");	
				$(this).addClass("now").siblings("a").removeClass("now");
				return false;
		})
						   
});


//第8个
$(document).ready(function(){
		$("#zzsc08").find(".pre").hide();//初始化为第一版
		var page=1;//初始化当前的版面为1
		var $show=$("#zzsc08").find(".zzsc_box");//找到图片展示区域
		var page_count=$show.find("ul").length;
		var $width_box=$show.parents("#wai_box").width();//找到图片展示区域外围的div
		//显示title文字
		$show.find("li").hover(function(){
			$(this).find(".title").show();								
		},function(){
			$(this).find(".title").hide();
		})
		function nav(){
			if(page==1){
				$("#zzsc08").find(".pre").hide().siblings(".next").show();
			}
			else if(page==page_count){
				$("#zzsc08").find(".next").hide().siblings(".pre").show();
			}
			else{
				$("#zzsc08").find(".pre").show().siblings(".next").show();
			}
		}
		$("#zzsc08").find(".next").click(function(){
			//首先判断展示区域是否处于动画
			if(!$show.is(":animated")){
				$show.animate({left:'-='+$width_box},"normal");
				page++;
				nav();
				$number=page-1;
				$("#zzsc08").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
				return false;
			}
		})
		$("#zzsc08").find(".pre").click(function(){
		if(!$show.is(":animated")){
			$show.animate({left:'+='+$width_box},"normal");
			page--;
			nav();
			$number=page-1;
			$("#zzsc08").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
			}
			return false;
		})
		$("#zzsc08").find(".nav a").click(function(){
				$index=$(this).index();
				page=$index+1;
				nav();
				$show.animate({left:-($width_box*$index)},"normal");	
				$(this).addClass("now").siblings("a").removeClass("now");
				return false;
		})
						   
});


//第9个
$(document).ready(function(){
		$("#zzsc09").find(".pre").hide();//初始化为第一版
		var page=1;//初始化当前的版面为1
		var $show=$("#zzsc09").find(".zzsc_box");//找到图片展示区域
		var page_count=$show.find("ul").length;
		var $width_box=$show.parents("#wai_box").width();//找到图片展示区域外围的div
		//显示title文字
		$show.find("li").hover(function(){
			$(this).find(".title").show();								
		},function(){
			$(this).find(".title").hide();
		})
		function nav(){
			if(page==1){
				$("#zzsc09").find(".pre").hide().siblings(".next").show();
			}
			else if(page==page_count){
				$("#zzsc09").find(".next").hide().siblings(".pre").show();
			}
			else{
				$("#zzsc09").find(".pre").show().siblings(".next").show();
			}
		}
		$("#zzsc09").find(".next").click(function(){
			//首先判断展示区域是否处于动画
			if(!$show.is(":animated")){
				$show.animate({left:'-='+$width_box},"normal");
				page++;
				nav();
				$number=page-1;
				$("#zzsc09").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
				return false;
			}
		})
		$("#zzsc09").find(".pre").click(function(){
		if(!$show.is(":animated")){
			$show.animate({left:'+='+$width_box},"normal");
			page--;
			nav();
			$number=page-1;
			$("#zzsc09").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
			}
			return false;
		})
		$("#zzsc09").find(".nav a").click(function(){
				$index=$(this).index();
				page=$index+1;
				nav();
				$show.animate({left:-($width_box*$index)},"normal");	
				$(this).addClass("now").siblings("a").removeClass("now");
				return false;
		})
						   
});


//第10个
$(document).ready(function(){
		$("#zzsc10").find(".pre").hide();//初始化为第一版
		var page=1;//初始化当前的版面为1
		var $show=$("#zzsc10").find(".zzsc_box");//找到图片展示区域
		var page_count=$show.find("ul").length;
		var $width_box=$show.parents("#wai_box").width();//找到图片展示区域外围的div
		//显示title文字
		$show.find("li").hover(function(){
			$(this).find(".title").show();								
		},function(){
			$(this).find(".title").hide();
		})
		function nav(){
			if(page==1){
				$("#zzsc10").find(".pre").hide().siblings(".next").show();
			}
			else if(page==page_count){
				$("#zzsc10").find(".next").hide().siblings(".pre").show();
			}
			else{
				$("#zzsc10").find(".pre").show().siblings(".next").show();
			}
		}
		$("#zzsc10").find(".next").click(function(){
			//首先判断展示区域是否处于动画
			if(!$show.is(":animated")){
				$show.animate({left:'-='+$width_box},"normal");
				page++;
				nav();
				$number=page-1;
				$("#zzsc10").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
				return false;
			}
		})
		$("#zzsc10").find(".pre").click(function(){
		if(!$show.is(":animated")){
			$show.animate({left:'+='+$width_box},"normal");
			page--;
			nav();
			$number=page-1;
			$("#zzsc10").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
			}
			return false;
		})
		$("#zzsc10").find(".nav a").click(function(){
				$index=$(this).index();
				page=$index+1;
				nav();
				$show.animate({left:-($width_box*$index)},"normal");	
				$(this).addClass("now").siblings("a").removeClass("now");
				return false;
		})
						   
});




//第11个
$(document).ready(function(){
		$("#zzsc11").find(".pre").hide();//初始化为第一版
		var page=1;//初始化当前的版面为1
		var $show=$("#zzsc11").find(".zzsc_box");//找到图片展示区域
		var page_count=$show.find("ul").length;
		var $width_box=$show.parents("#wai_box").width();//找到图片展示区域外围的div
		//显示title文字
		$show.find("li").hover(function(){
			$(this).find(".title").show();								
		},function(){
			$(this).find(".title").hide();
		})
		function nav(){
			if(page==1){
				$("#zzsc11").find(".pre").hide().siblings(".next").show();
			}
			else if(page==page_count){
				$("#zzsc11").find(".next").hide().siblings(".pre").show();
			}
			else{
				$("#zzsc11").find(".pre").show().siblings(".next").show();
			}
		}
		$("#zzsc11").find(".next").click(function(){
			//首先判断展示区域是否处于动画
			if(!$show.is(":animated")){
				$show.animate({left:'-='+$width_box},"normal");
				page++;
				nav();
				$number=page-1;
				$("#zzsc11").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
				return false;
			}
		})
		$("#zzsc11").find(".pre").click(function(){
		if(!$show.is(":animated")){
			$show.animate({left:'+='+$width_box},"normal");
			page--;
			nav();
			$number=page-1;
			$("#zzsc11").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
			}
			return false;
		})
		$("#zzsc11").find(".nav a").click(function(){
				$index=$(this).index();
				page=$index+1;
				nav();
				$show.animate({left:-($width_box*$index)},"normal");	
				$(this).addClass("now").siblings("a").removeClass("now");
				return false;
		})
						   
});



//第12个
$(document).ready(function(){
		$("#zzsc12").find(".pre").hide();//初始化为第一版
		var page=1;//初始化当前的版面为1
		var $show=$("#zzsc12").find(".zzsc_box");//找到图片展示区域
		var page_count=$show.find("ul").length;
		var $width_box=$show.parents("#wai_box").width();//找到图片展示区域外围的div
		//显示title文字
		$show.find("li").hover(function(){
			$(this).find(".title").show();								
		},function(){
			$(this).find(".title").hide();
		})
		function nav(){
			if(page==1){
				$("#zzsc12").find(".pre").hide().siblings(".next").show();
			}
			else if(page==page_count){
				$("#zzsc12").find(".next").hide().siblings(".pre").show();
			}
			else{
				$("#zzsc12").find(".pre").show().siblings(".next").show();
			}
		}
		$("#zzsc12").find(".next").click(function(){
			//首先判断展示区域是否处于动画
			if(!$show.is(":animated")){
				$show.animate({left:'-='+$width_box},"normal");
				page++;
				nav();
				$number=page-1;
				$("#zzsc12").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
				return false;
			}
		})
		$("#zzsc12").find(".pre").click(function(){
		if(!$show.is(":animated")){
			$show.animate({left:'+='+$width_box},"normal");
			page--;
			nav();
			$number=page-1;
			$("#zzsc12").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
			}
			return false;
		})
		$("#zzsc12").find(".nav a").click(function(){
				$index=$(this).index();
				page=$index+1;
				nav();
				$show.animate({left:-($width_box*$index)},"normal");	
				$(this).addClass("now").siblings("a").removeClass("now");
				return false;
		})
						   
});

//第12个
$(document).ready(function(){
		$("#zzsc13").find(".pre").hide();//初始化为第一版
		var page=1;//初始化当前的版面为1
		var $show=$("#zzsc13").find(".zzsc_box");//找到图片展示区域
		var page_count=$show.find("ul").length;
		var $width_box=$show.parents("#wai_box").width();//找到图片展示区域外围的div
		//显示title文字
		$show.find("li").hover(function(){
			$(this).find(".title").show();								
		},function(){
			$(this).find(".title").hide();
		})
		function nav(){
			if(page==1){
				$("#zzsc13").find(".pre").hide().siblings(".next").show();
			}
			else if(page==page_count){
				$("#zzsc13").find(".next").hide().siblings(".pre").show();
			}
			else{
				$("#zzsc13").find(".pre").show().siblings(".next").show();
			}
		}
		$("#zzsc13").find(".next").click(function(){
			//首先判断展示区域是否处于动画
			if(!$show.is(":animated")){
				$show.animate({left:'-='+$width_box},"normal");
				page++;
				nav();
				$number=page-1;
				$("#zzsc13").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
				return false;
			}
		})
		$("#zzsc13").find(".pre").click(function(){
		if(!$show.is(":animated")){
			$show.animate({left:'+='+$width_box},"normal");
			page--;
			nav();
			$number=page-1;
			$("#zzsc13").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
			}
			return false;
		})
		$("#zzsc13").find(".nav a").click(function(){
				$index=$(this).index();
				page=$index+1;
				nav();
				$show.animate({left:-($width_box*$index)},"normal");	
				$(this).addClass("now").siblings("a").removeClass("now");
				return false;
		})
						   
});


//第14个
$(document).ready(function(){
		$("#zzsc14").find(".pre").hide();//初始化为第一版
		var page=1;//初始化当前的版面为1
		var $show=$("#zzsc14").find(".zzsc_box");//找到图片展示区域
		var page_count=$show.find("ul").length;
		var $width_box=$show.parents("#wai_box").width();//找到图片展示区域外围的div
		//显示title文字
		$show.find("li").hover(function(){
			$(this).find(".title").show();								
		},function(){
			$(this).find(".title").hide();
		})
		function nav(){
			if(page==1){
				$("#zzsc14").find(".pre").hide().siblings(".next").show();
			}
			else if(page==page_count){
				$("#zzsc14").find(".next").hide().siblings(".pre").show();
			}
			else{
				$("#zzsc14").find(".pre").show().siblings(".next").show();
			}
		}
		$("#zzsc14").find(".next").click(function(){
			//首先判断展示区域是否处于动画
			if(!$show.is(":animated")){
				$show.animate({left:'-='+$width_box},"normal");
				page++;
				nav();
				$number=page-1;
				$("#zzsc14").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
				return false;
			}
		})
		$("#zzsc14").find(".pre").click(function(){
		if(!$show.is(":animated")){
			$show.animate({left:'+='+$width_box},"normal");
			page--;
			nav();
			$number=page-1;
			$("#zzsc14").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
			}
			return false;
		})
		$("#zzsc14").find(".nav a").click(function(){
				$index=$(this).index();
				page=$index+1;
				nav();
				$show.animate({left:-($width_box*$index)},"normal");	
				$(this).addClass("now").siblings("a").removeClass("now");
				return false;
		})
						   
});



//第15个
$(document).ready(function(){
		$("#zzsc15").find(".pre").hide();//初始化为第一版
		var page=1;//初始化当前的版面为1
		var $show=$("#zzsc15").find(".zzsc_box");//找到图片展示区域
		var page_count=$show.find("ul").length;
		var $width_box=$show.parents("#wai_box").width();//找到图片展示区域外围的div
		//显示title文字
		$show.find("li").hover(function(){
			$(this).find(".title").show();								
		},function(){
			$(this).find(".title").hide();
		})
		function nav(){
			if(page==1){
				$("#zzsc15").find(".pre").hide().siblings(".next").show();
			}
			else if(page==page_count){
				$("#zzsc15").find(".next").hide().siblings(".pre").show();
			}
			else{
				$("#zzsc15").find(".pre").show().siblings(".next").show();
			}
		}
		$("#zzsc15").find(".next").click(function(){
			//首先判断展示区域是否处于动画
			if(!$show.is(":animated")){
				$show.animate({left:'-='+$width_box},"normal");
				page++;
				nav();
				$number=page-1;
				$("#zzsc15").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
				return false;
			}
		})
		$("#zzsc15").find(".pre").click(function(){
		if(!$show.is(":animated")){
			$show.animate({left:'+='+$width_box},"normal");
			page--;
			nav();
			$number=page-1;
			$("#zzsc15").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
			}
			return false;
		})
		$("#zzsc15").find(".nav a").click(function(){
				$index=$(this).index();
				page=$index+1;
				nav();
				$show.animate({left:-($width_box*$index)},"normal");	
				$(this).addClass("now").siblings("a").removeClass("now");
				return false;
		})
						   
});
