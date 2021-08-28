$(function(){ // section2.js
/*----------------------------------------------------------------------------------*/	
	
	var imgW = wrapW = 0;
		imgHeightFn();
	
/*----------------------------------------------------------------------------------*/	
	$(window).resize(function(){
		imgHeightFn();
	});
	
	function imgHeightFn(){
		wrapW = $('.section2-photo-wrap').innerWidth();
		imgW  = $('.section2-photo-wrap>li>div>img').innerWidth();
		
		if( $(window).innerWidth() > 1000 ){
			$('.section2-photo-wrap').css({ paddingTop: wrapW * 0.087719298, transition:'all 0.3s' });
			$('.section2-text-wrap' ).css({ paddingTop:imgW * 0.125197368, paddingBottom:imgW * 0.125197368, paddingLeft:imgW * 0.087719298, paddingRight:imgW * 0.087719298, transition:'all 0.3s' });
		    $('.section2-text-wrap>li>span').css({ paddingBottom:imgW * 0.035087719, transition:'all 0.3s'});
		    $('.section2-text-wrap>li>p   ').css({ paddingBottom:imgW * 0.02631579, transition:'all 0.3s' });
		}
		else if( $(window).innerWidth() <= 1000 && $(window).innerWidth() > 640 ){
			$('.section2-photo-wrap').css({ paddingTop: wrapW * 0.087719298, transition:'all 0.3s' });
			$('.section2-text-wrap' ).css({ paddingTop:imgW * 0.155596575, paddingBottom:imgW * 0.155596575, paddingLeft:imgW * 0.087719298, paddingRight:imgW * 0.087719298, transition:'all 0.3s' });
		    $('.section2-text-wrap>li>span').css({ paddingBottom:imgW * 0.035087719, transition:'all 0.3s'});
		    $('.section2-text-wrap>li>p   ').css({ paddingBottom:imgW * 0.035087719, transition:'all 0.3s' });
		}
		else if( $(window).innerWidth() <= 640 && $(window).innerWidth() > 490 ){
			$('.section2-photo-wrap').css({ paddingTop: wrapW * 0.087719298, transition:'all 0.3s' });
			$('.section2-text-wrap' ).css({ paddingTop:imgW * 0.155596575, paddingBottom:imgW * 0.155596575, paddingLeft:imgW * 0.04109589, paddingRight:imgW * 0.04109589, transition:'all 0.3s' });
		    $('.section2-text-wrap>li>span').css({ paddingBottom:imgW * 0.035087719, transition:'all 0.3s' });
		    $('.section2-text-wrap>li>p   ').css({ paddingBottom:imgW * 0, transition:'all 0.3s' });
		}
		else if( $(window).innerWidth() <= 490 && $(window).innerWidth() > 380  ){
			$('.section2-photo-wrap').css({ paddingTop: wrapW * 0.087719298, transition:'all 0.3s' });
			$('.section2-text-wrap' ).css({ paddingTop:imgW * 0.087719298, paddingBottom:imgW * 0.087719298, paddingLeft:imgW * 0.04109589, paddingRight:imgW * 0.04109589, transition:'all 0.3s' });
		    $('.section2-text-wrap>li>span').css({ paddingBottom:imgW * 0.01369863, transition:'all 0.3s'});
		    $('.section2-text-wrap>li>p   ').css({ paddingBottom:imgW * 0, transition:'all 0.3s' });
		}
		else if( $(window).innerWidth() <= 380 ){
			$('.section2-photo-wrap').css({ paddingTop: wrapW * 0.087719298, transition:'all 0.3s' });
			$('.section2-text-wrap' ).css({ paddingTop:imgW * 0.04109589, paddingBottom:imgW * 0.04109589, paddingLeft:imgW * 0.04109589, paddingRight:imgW * 0.04109589, transition:'all 0.3s' });
		    $('.section2-text-wrap>li>span').css({ paddingBottom:imgW * 0.01369863, transition:'all 0.3s'});
		    $('.section2-text-wrap>li>p   ').css({ paddingBottom:imgW * 0, transition:'all 0.3s' });
		}
	}
/*----------------------------------------------------------------------------------*/	
	// 마우스 오버 이벤트 : 우측에서 좌측으로 움직이는 박스
	$('.section2-photo-top').each(function(z){
		$(this).on({
			mouseenter: function(){
				$('.addSec2Right').eq(z).stop().animate({left:0, opacity:1},200);
				$('.add990Right').eq(z).stop().animate({opacity:1},200);
			},
			mouseleave: function(){
				$('.addSec2Right').eq(z).stop().animate({left:'50%', opacity:0.9},200);
				$('.add990Right').eq(z).stop().animate({opacity:0},200);
			},
			focusin: function(){
				$('.addSec2Right').eq(z).stop().animate({left:0, opacity:1},200);
				$('.add990Right').eq(z).stop().animate({opacity:1},200);
			},
			focusout: function(){
				$('.addSec2Right').eq(z).stop().animate({left:'50%', opacity:0.9},200);
				$('.add990Right').eq(z).stop().animate({opacity:0},200);
			}
		});
	});
/*----------------------------------------------------------------------------------*/	
	// 마우스 오버 이벤트 : 좌측에서 우측으로 움직이는 박스
	$('.section2-photo-bottom').each(function(z){
		$(this).on({
			mouseenter: function(){
				$('.addSec2Left' ).eq(z).stop().animate({left:'50%', opacity:1},200);
				$('.add990Left').eq(z).stop().animate({opacity:1},200);
			},
			mouseleave: function(){
				$('.addSec2Left' ).eq(z).stop().animate({left:0, opacity:0.9},200);
				$('.add990Left').eq(z).stop().animate({opacity:0},200);
			},
			focusin: function(){
				$('.addSec2Left' ).eq(z).stop().animate({left:'50%', opacity:1},200);
				$('.add990Left').eq(z).stop().animate({opacity:1},200);
			},
			focusout: function(){
				$('.addSec2Left' ).eq(z).stop().animate({left:0, opacity:0.9},200);
				$('.add990Left').eq(z).stop().animate({opacity:0},200);
			}
		});
	});
	
/*----------------------------------------------------------------------------------*/	
}); // section2.js