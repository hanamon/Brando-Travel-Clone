$(function(){ // section7.js
/*-----------------------------------------------------------------------------------------------------------*/	
	
	var imgH = 0;
	
	imgHeightFn();
	setTimeout(imgHeightFn, 100);
	
/*-----------------------------------------------------------------------------------------------------------*/		
	$(window).resize(function(){
		imgHeightFn();
	});
	
	function imgHeightFn(){
		imgH = $('.section7-left-img-wrap>div>a>img').innerHeight();
			   $('.section7-right-text-wrap>div').css({height:imgH});
			   $('.section7-right-text-wrap>div>span>a'     ).css({ fontSize : imgH * 0.064864865, transition:'all 0s' });
			   $('.section7-right-text-wrap>div>span>strong').css({ fontSize : imgH * 0.05045045,  transition:'all 0s' });
			   $('.section7-right-text-wrap>div>span>i'     ).css({ height   : imgH * 0.014414414, transition:'all 0s' });
	}
/*-----------------------------------------------------------------------------------------------------------*/	
	// 텍스트 오버시 칼라 바뀜
	$('.section7-right-text-wrap>div>span>a').on({
		mouseenter: function(){
			$(this).css({color:'#272727', transition:'all 0.3s'});
		},
		mouseleave: function(){
			$(this).css({color:'#626262', transition:'all 0.3s'});
		},
		focusin: function(){
			$(this).css({color:'#272727', transition:'all 0.3s'});
		},
		focusout: function(){
			$(this).css({color:'#626262', transition:'all 0.3s'});
		}
	});
/*-----------------------------------------------------------------------------------------------------------*/	
	// 이미지 박스 오버 시 이벤트
	$('.section7-content-wrap').on({
		mouseenter: function(){
			$(this).find('.section7-gallery-image').css({transform:'scale(1.1)', transition:'all 0.3s'});
		},
		mouseleave: function(){
			$(this).find('.section7-gallery-image').css({transform:'scale(1)', transition:'all 0.3s'});
		}
	});
	
	// 이미지 포커스 시 이벤트
	$('.section7-gallery-image').on({
		focusin: function(){
			$(this).css({transform:'scale(1.1)', transition:'all 0.3s'});
		},
		focusout: function(){
			$(this).css({transform:'scale(1)', transition:'all 0.3s'});
		}
	});
	
/*-----------------------------------------------------------------------------------------------------------*/	
}); // section7.js
