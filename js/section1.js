$(function(){ // section1.js
/*-----------------------------------------------------------------------------------------------------*/	
	
	var imgH = imgW760 = 0;
	
	setTimeout(imgHeightFn);
	
	$(window).resize(function(){
		imgHeightFn();
	});
	
	function imgHeightFn(){
		
		imgH    = $('.section1-right-image').innerHeight();
		imgW760 = $('.section1-content>li' ).innerWidth();
		
		if( $(window).innerWidth() > 960 ){
			$('.section1-right-content>ul>li>h2').css({fontSize : imgH * 0.068965517, paddingTop : imgH * 0.131034483, paddingBottom : imgH * 0.055172414});
			$('.section1-right-content>ul>li>i' ).css({height   : imgH * 0.011034483});
			$('.section1-right-content>ul>li>p' ).css({fontSize : imgH * 0.020689655, paddingTop : imgH * 0.055172414, paddingBottom : imgH * 0.062068966});
			$('.section1-right-content>ul>li>a' ).css({fontSize : 14, transition:'all 0s'});
		}
		else if( $(window).innerWidth() <= 960 && $(window).innerWidth() > 760 ){
			$('.section1-right-content>ul>li>h2').css({fontSize : imgH * 0.068965517, paddingTop : imgH * 0.055172414, paddingBottom : imgH * 0.055172414});
			$('.section1-right-content>ul>li>i' ).css({height   : imgH * 0.011034483});
			$('.section1-right-content>ul>li>p' ).css({fontSize : 12.7655, paddingTop : imgH * 0.055172414, paddingBottom : imgH * 0.062068966, lineHeight:'180%'});
			$('.section1-right-content>ul>li>a' ).css({fontSize : 14, transition:'all 0s'});
		}
		else if( $(window).innerWidth() <= 760 ){
			$('.section1-right-content>ul>li>h2').css({fontSize : 22, paddingTop:0, paddingBottom : imgW760 * 0.061643836});
			$('.section1-right-content>ul>li>i' ).css({height   : 8});
			$('.section1-right-content>ul>li>p' ).css({fontSize : 11, paddingTop : imgW760 * 0.061643836, paddingBottom : imgW760 * 0.068965517});
			$('.section1-right-content>ul>li>a' ).css({fontSize : 14, transition:'all 0s'});
		}
	}
	
	$('.section1-right-content>ul>li>a').on({
		mouseenter: function(){
			$(this).css({background:'rgba(255,255,255,0.3)', transition:'all 1s'});
		},
		mouseleave: function(){
			$(this).css({background:'rgba(255,255,255,0.1)', transition:'all 1s'});
		},
		focusin: function(){
			$(this).css({background:'rgba(255,255,255,0.3)', transition:'all 1s'});
		},
		focusout: function(){
			$(this).css({background:'rgba(255,255,255,0.1)', transition:'all 1s'});
		}
	});
	
/*-----------------------------------------------------------------------------------------------------*/	
}); // section1.js