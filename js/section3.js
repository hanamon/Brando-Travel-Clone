$(function(){ // section3.js
/*----------------------------------------------------------------------------------*/
	
	$('.section3-content-wrap>li>div>a').on({
		mouseenter: function(){
			$(this).parent().css({borderRadius:'50%', transition:'all 0.3s'});
		},
		mouseleave: function(){
			$(this).parent().css({borderRadius:'0',   transition:'all 0.3s'});
		},
		focusin: function(){
			$(this).parent().css({borderRadius:'50%', transition:'all 0.3s'});
		},
		focusout: function(){
			$(this).parent().css({borderRadius:'0',   transition:'all 0.3s'});
		}
	});
	
/*----------------------------------------------------------------------------------*/	
}); // section3.js
