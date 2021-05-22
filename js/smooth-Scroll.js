$(function(){ // moveSmooth.js
/*-------------------------------------------------------------*/	
	
	var smooth = $clickBtn = 0;
	
	// a 버튼클릭 - 스무스 스크롤 이벤트 : 버튼의 링크요소 탑값으로 이동 
	$('.smoothBtn').on({
		click: function(){
			smooth = $(this).attr('href');
			$('html, body').stop().animate({ scrollTop : $(smooth).offset().top }, 800);
		}
	});
	
/*-------------------------------------------------------------*/	
}); // moveSmooth.js