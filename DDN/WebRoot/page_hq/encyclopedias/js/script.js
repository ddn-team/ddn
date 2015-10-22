// JavaScript Document
$(document).ready(function(){
	$('.pic_next').click(function(){
		
		if($('.piclist').is(':animated')){
			$('.piclist').stop(true,true);
		}/* 避免点击事件重复 */
		
		ml = parseInt($('.piclist').css('left'));
		r = liw - (700 - ml);  /* 700为外部区块.infopic的宽度，15为li之间的距离，即.piclist li的margin-right的值 */
		if(r<700){
			s = r - 15;
		}else{
			s = 700;
		}
		$('.piclist').animate({left: ml - s + 'px'},'slow');			
	})
	
	$('.pic_prev').click(function(){
		
		if($('.piclist').is(':animated')){
			$('.piclist').stop(true,true);
		}/* 避免点击事件重复 */
		
		ml = parseInt($('.piclist').css('left'));
		if(ml>-700){
			s = ml;
		}else{
			s = -700;
		}
		$('.piclist').animate({left: ml - s + 'px'},'slow');			
	})
	
})
//info pic
$(window).load(function(){
	liw = 0;
	$('.piclist li').each(function(){
		liw += $(this).width()+15;
		$(this).css('width',$(this).width()+'px');
	})
	$('.piclist').width( liw + 'px');
})


//第二个
$(document).ready(function(){
	$('#next02.pic_next02').click(function(){
		
		if($('.piclist02').is(':animated')){
			$('.piclist02').stop(true,true);
		}/* 避免点击事件重复 */
		
		ml = parseInt($('.piclist02').css('left'));
		r = liw - (700 - ml);  /* 700为外部区块.infopic的宽度，15为li之间的距离，即.piclist li的margin-right的值 */
		if(r<700){
			s = r - 15;
		}else{
			s = 700;
		}
		$('.piclist02').animate({left: ml - s + 'px'},'slow');			
	})
	
	$('.pic_prev02').click(function(){
		
		if($('.piclist02').is(':animated')){
			$('.piclist02').stop(true,true);
		}/* 避免点击事件重复 */
		
		ml = parseInt($('.piclist02').css('left'));
		if(ml>-700){
			s = ml;
		}else{
			s = -700;
		}
		$('.piclist02').animate({left: ml - s + 'px'},'slow');			
	})
	
})
//info pic
$(window).load(function(){
	liw = 0;
	$('.piclist02 li').each(function(){
		liw += $(this).width()+15;
		$(this).css('width',$(this).width()+'px');
	})
	$('.piclist02').width( liw + 'px');
})


//第三个
$(document).ready(function(){
	$('#next03.pic_next03').click(function(){
		
		if($('.piclist03').is(':animated')){
			$('.piclist03').stop(true,true);
		}/* 避免点击事件重复 */
		
		ml = parseInt($('.piclist02').css('left'));
		r = liw - (700 - ml);  /* 700为外部区块.infopic的宽度，15为li之间的距离，即.piclist li的margin-right的值 */
		if(r<700){
			s = r - 15;
		}else{
			s = 700;
		}
		$('.piclist03').animate({left: ml - s + 'px'},'slow');			
	})
	
	$('.pic_prev03').click(function(){
		
		if($('.piclist03').is(':animated')){
			$('.piclist03').stop(true,true);
		}/* 避免点击事件重复 */
		
		ml = parseInt($('.piclist03').css('left'));
		if(ml>-700){
			s = ml;
		}else{
			s = -700;
		}
		$('.piclist03').animate({left: ml - s + 'px'},'slow');			
	})
	
})
//info pic
$(window).load(function(){
	liw = 0;
	$('.piclist03 li').each(function(){
		liw += $(this).width()+15;
		$(this).css('width',$(this).width()+'px');
	})
	$('.piclist03').width( liw + 'px');
})


//第四个
$(document).ready(function(){
	$('#next04.pic_next04').click(function(){
		
		if($('.piclist04').is(':animated')){
			$('.piclist04').stop(true,true);
		}/* 避免点击事件重复 */
		
		ml = parseInt($('.piclist04').css('left'));
		r = liw - (700 - ml);  /* 700为外部区块.infopic的宽度，15为li之间的距离，即.piclist li的margin-right的值 */
		if(r<700){
			s = r - 15;
		}else{
			s = 700;
		}
		$('.piclist04').animate({left: ml - s + 'px'},'slow');			
	})
	
	$('.pic_prev04').click(function(){
		
		if($('.piclist04').is(':animated')){
			$('.piclist04').stop(true,true);
		}/* 避免点击事件重复 */
		
		ml = parseInt($('.piclist04').css('left'));
		if(ml>-700){
			s = ml;
		}else{
			s = -700;
		}
		$('.piclist04').animate({left: ml - s + 'px'},'slow');			
	})
	
})
//info pic
$(window).load(function(){
	liw = 0;
	$('.piclist04 li').each(function(){
		liw += $(this).width()+15;
		$(this).css('width',$(this).width()+'px');
	})
	$('.piclist04').width( liw + 'px');
})

//第五个
$(document).ready(function(){
	$('#next05.pic_next05').click(function(){
		
		if($('.piclist05').is(':animated')){
			$('.piclist05').stop(true,true);
		}/* 避免点击事件重复 */
		
		ml = parseInt($('.piclist05').css('left'));
		r = liw - (700 - ml);  /* 700为外部区块.infopic的宽度，15为li之间的距离，即.piclist li的margin-right的值 */
		if(r<700){
			s = r - 15;
		}else{
			s = 700;
		}
		$('.piclist05').animate({left: ml - s + 'px'},'slow');			
	})
	
	$('.pic_prev05').click(function(){
		
		if($('.piclist05').is(':animated')){
			$('.piclist05').stop(true,true);
		}/* 避免点击事件重复 */
		
		ml = parseInt($('.piclist05').css('left'));
		if(ml>-700){
			s = ml;
		}else{
			s = -700;
		}
		$('.piclist05').animate({left: ml - s + 'px'},'slow');			
	})
	
})
//info pic
$(window).load(function(){
	liw = 0;
	$('.piclist05 li').each(function(){
		liw += $(this).width()+15;
		$(this).css('width',$(this).width()+'px');
	})
	$('.piclist05').width( liw + 'px');
})

//第六个
$(document).ready(function(){
	$('#next06.pic_next06').click(function(){
		
		if($('.piclist06').is(':animated')){
			$('.piclist06').stop(true,true);
		}/* 避免点击事件重复 */
		
		ml = parseInt($('.piclist06').css('left'));
		r = liw - (700 - ml);  /* 700为外部区块.infopic的宽度，15为li之间的距离，即.piclist li的margin-right的值 */
		if(r<700){
			s = r - 15;
		}else{
			s = 700;
		}
		$('.piclist06').animate({left: ml - s + 'px'},'slow');			
	})
	
	$('.pic_prev06').click(function(){
		
		if($('.piclist06').is(':animated')){
			$('.piclist06').stop(true,true);
		}/* 避免点击事件重复 */
		
		ml = parseInt($('.piclist06').css('left'));
		if(ml>-700){
			s = ml;
		}else{
			s = -700;
		}
		$('.piclist06').animate({left: ml - s + 'px'},'slow');			
	})
	
})
//info pic
$(window).load(function(){
	liw = 0;
	$('.piclist06 li').each(function(){
		liw += $(this).width()+15;
		$(this).css('width',$(this).width()+'px');
	})
	$('.piclist06').width( liw + 'px');
})


//第七个
$(document).ready(function(){
	$('#next07.pic_next07').click(function(){
		
		if($('.piclist07').is(':animated')){
			$('.piclist07').stop(true,true);
		}/* 避免点击事件重复 */
		
		ml = parseInt($('.piclist07').css('left'));
		r = liw - (700 - ml);  /* 700为外部区块.infopic的宽度，15为li之间的距离，即.piclist li的margin-right的值 */
		if(r<700){
			s = r - 15;
		}else{
			s = 700;
		}
		$('.piclist07').animate({left: ml - s + 'px'},'slow');			
	})
	
	$('.pic_prev07').click(function(){
		
		if($('.piclist07').is(':animated')){
			$('.piclist07').stop(true,true);
		}/* 避免点击事件重复 */
		
		ml = parseInt($('.piclist07').css('left'));
		if(ml>-700){
			s = ml;
		}else{
			s = -700;
		}
		$('.piclist07').animate({left: ml - s + 'px'},'slow');			
	})
	
})
//info pic
$(window).load(function(){
	liw = 0;
	$('.piclist07 li').each(function(){
		liw += $(this).width()+15;
		$(this).css('width',$(this).width()+'px');
	})
	$('.piclist07').width( liw + 'px');
})


