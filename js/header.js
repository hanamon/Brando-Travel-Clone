$(function(){ // header.js
/*-----------------------------------------------------------------------------------------------------------------------*/	
	
	var winTop = 0;
	
	// 헤더 - 스크롤 이벤트 : 스크롤탑 값 30px 이상이면 에드클레스
	$(window).scroll(function(){
		winTop = $(window).scrollTop();
		/* 헤드 고정바 높이 변경 이벤트 */
		if( winTop > 30 ){
			$('.addHeaderHi').addClass('addFixed');
			$('#goTopBtn-wrap').css({display:'block'});
		}
		else{
			$('.addHeaderHi').removeClass('addFixed');
			$('#goTopBtn-wrap').removeClass('addFixed');
		}
		/* 메인메뉴 밑줄 나오는 이벤트 */
		if( winTop > $('#section3').offset().top-300 && winTop < $('#section4').offset().top-300 ){
			$('.mainBtn>i').eq(0).css({transform:'scale(1)', transition:'all 0.3s'});
			$('.mainBtn>i').eq(6).css({transform:'scale(1)', transition:'all 0.3s'});
		}
		else{
			$('.mainBtn>i').eq(0).css({transform:'scale(0)', transition:'all 0.3s'});
			$('.mainBtn>i').eq(6).css({transform:'scale(0)', transition:'all 0.3s'});
		}
		if( winTop > $('#section5').offset().top-100 && winTop < $('#section6').offset().top-200){
			$('.mainBtn>i').eq(1).css({transform:'scale(1)', transition:'all 0.3s'});
			$('.mainBtn>i').eq(7).css({transform:'scale(1)', transition:'all 0.3s'});
		}
		else{
			$('.mainBtn>i').eq(1).css({transform:'scale(0)', transition:'all 0.3s'});
			$('.mainBtn>i').eq(7).css({transform:'scale(0)', transition:'all 0.3s'});
		}
		if( winTop > $('#section6').offset().top-200 && winTop < $('#section7').offset().top-250){
			$('.mainBtn>i').eq(2).css({transform:'scale(1)', transition:'all 0.3s'});
			$('.mainBtn>i').eq(8).css({transform:'scale(1)', transition:'all 0.3s'});
		}
		else{
			$('.mainBtn>i').eq(2).css({transform:'scale(0)', transition:'all 0.3s'});
			$('.mainBtn>i').eq(8).css({transform:'scale(0)', transition:'all 0.3s'});
		}
		if( winTop > $('#section7').offset().top-250 && winTop < $('#section8').offset().top-200){
			$('.mainBtn>i').eq(3).css({transform:'scale(1)', transition:'all 0.3s'});
			$('.mainBtn>i').eq(9).css({transform:'scale(1)', transition:'all 0.3s'});
		}
		else{
			$('.mainBtn>i').eq(3).css({transform:'scale(0)', transition:'all 0.3s'});
			$('.mainBtn>i').eq(9).css({transform:'scale(0)', transition:'all 0.3s'});
		}
		if( winTop > $('#section9').offset().top-200 && winTop < $('#section10').offset().top-200){
			$('.mainBtn>i').eq(4).css({transform:'scale(1)', transition:'all 0.3s'});
			$('.mainBtn>i').eq(10).css({transform:'scale(1)', transition:'all 0.3s'});
		}
		else{
			$('.mainBtn>i').eq(4).css({transform:'scale(0)', transition:'all 0.3s'});
			$('.mainBtn>i').eq(10).css({transform:'scale(0)', transition:'all 0.3s'});
		}
		if( winTop > $('#section11').offset().top-200){
			$('.mainBtn>i').eq(5).css({transform:'scale(1)', transition:'all 0.3s'});
			$('.mainBtn>i').eq(11).css({transform:'scale(1)', transition:'all 0.3s'});
		}
		else{
			$('.mainBtn>i').eq(5).css({transform:'scale(0)', transition:'all 0.3s'});
			$('.mainBtn>i').eq(11).css({transform:'scale(0)', transition:'all 0.3s'});
		}
	});
	
/*-----------------------------------------------------------------------------------------------------------------------*/	
}); // header.js