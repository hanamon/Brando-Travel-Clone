$(function(){ // section5-Modal.js
/*--------------------------------------------------------------------------------------------*/	
	
	var winH = imgH = imgMarTop = imgNum = 0; 
	
	$(window).resize(function(){
		imgMarTopFn();
	});
	
/*--------------------------------------------------------------------------------------------*/	
	/* 모달창 이미지 마진탑 값 설정 */	
	function imgMarTopFn(){
		winH = $(window).innerHeight();
		imgH = $('.modal-Image-wrap>img').innerHeight();
		imgMarTop = (winH-imgH)/2;
		$('.modal-Image-wrap>img' ).css({marginTop:imgMarTop});
	}
	function modalGalleryFn(z){
		$('.modal-Image-wrap>img').attr('src', 'img/travel-img' + (z) + '.jpg').stop().animate({opacity:0},0).animate({opacity:1},500);
	}
/*--------------------------------------------------------------------------------------------*/
	$('.modal-Right-Arrow-wrap').on({
		click: function(){
			imgNum++;
			if( imgNum > 24 ){
				imgNum = 17;
			}
			modalGalleryFn(imgNum);
		}
	});
	$('.modal-Left-Arrow-wrap').on({
		click: function(){
			imgNum--;
			if( imgNum < 17 ){
				imgNum = 24;
			}
			modalGalleryFn(imgNum);
		}
	});
/*--------------------------------------------------------------------------------------------*/	
	//모달창 닫기버튼 이벤트 
	$('.modal-closeBtn-wrap').on({
		click: function(){
			$('html').removeClass('addModalScroll');
			$('.section5-Modal-wrap').hide();
		}
	});
	
	//모달창 열기버튼 + 이미지 오버시 이벤트
	$('.section5-Gallery-wrap>li').each(function(z){
		$(this).on({
			click: function(){
				$('html').addClass('addModalScroll');
				$('.section5-Modal-wrap').show();
				
				imgMarTopFn();
				
				imgNum = $(this).find('img').attr('src').slice(14,16);
				modalGalleryFn(imgNum);
			},
			mouseenter: function(){
				$(this).find('.section5-hidden-text-wrap').css({top:-36, transition:'all 0.3s'});
				$(this).find('div>a>img').css({opacity:0.5, transform:'scale(1.1)', transition:'all 0.3s'});
			},
			mouseleave: function(){
				$(this).find('.section5-hidden-text-wrap').css({top:0, transition:'all 0.3s'});
				$(this).find('div>a>img').css({opacity:1, transform:'scale(1)', transition:'all 0.3s'});
			},
			focusin: function(){
				$(this).find('.section5-hidden-text-wrap').css({top:-36, transition:'all 0.3s'});
				$(this).find('div>a>img').css({opacity:0.5, transform:'scale(1.1)', transition:'all 0.3s'});
			},
			focusout: function(){
				$(this).find('.section5-hidden-text-wrap').css({top:0, transition:'all 0.3s'});
				$(this).find('div>a>img').css({opacity:1, transform:'scale(1)', transition:'all 0.3s'});
			}
		});
	});
	
/*--------------------------------------------------------------------------------------------*/
}); // section5-Modal.js
