$(function(){ // header-Mobile.js
/*-------------------------------------------------------------*/	
	
	resizeMobileFn();
	setTimeout(resizeMobileFn, 100);
	
/*-------------------------------------------------------------*/	
	$(window).resize(function(){
		resizeMobileFn();
	});
	function resizeMobileFn(){
		if( $(window).innerWidth() > 990 ){
			$('.header-mobile-menu-wrap').stop().slideUp(0);
		}
	}
/*-------------------------------------------------------------*/	
	$('.appBarBtn').on({
		click: function(){
			$('.header-mobile-menu-wrap').stop().slideToggle(300);
		}
	});
	
/*-------------------------------------------------------------*/	
}); // header-Mobile.js