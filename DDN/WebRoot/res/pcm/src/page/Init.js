var Pcm = Pcm || {};
Pcm.page= Pcm.page || {};

/**
 * 页面初始化
 */
(function(){
	Pcm.page.Init = (function(){
		$(document).ready(function(){
			var theme = Pcm.storage.getSString(Pcm.constant.S.theme);
			theme='b';
			if(theme != null){
				//样式切换
				//if(!Pcm.browser.isPC()){
					var $pages = $('div[data-role="page"]');
					    $pages.attr("data-theme",theme);
					$('div[data-role="page"]:eq(0)').attr("class","ui-page ui-page-footer-fixed ui-page-active ui-page-theme-" + theme);
					/*$pages.each(function(){
						$(this).css('background-color','#F2F2F2');
					});*/
				//}
			}
			//Pcm.file.load("res/css/common.css");
			//header\footer 默认值替换
			var $header= $('div[data-role="header"]'),$footer = $('div[data-role="footer"]'),
				//position_h = $header.attr('data-position'),position_f = $footer.attr('data-position'),
				toggle_h   = $header.attr('data-tap-toggle'),toggle_f = $footer.attr('data-tap-toggle');
			//if(!position_h){$header.attr('data-position','fixed');}
			//if(!position_f){$footer.attr('data-position','fixed');}
			if(!toggle_h)$header.attr('data-tap-toggle','false');
			if(!toggle_f)$footer.attr('data-tap-toggle','false');
		});
		return $;
	});
	Pcm.$ = Pcm.page.Init();
})();