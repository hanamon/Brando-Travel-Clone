$(function(){ // section6.js
/*--------------------------------------------------------------------------------------------*/	
	
	$('.section6-content-wrap>li>a').on({
		mouseenter: function(){
			$(this).parent().css({border:'4px solid rgba(255,255,255,0.2)', transition:'all 0.3s'});
		},
		mouseleave: function(){
			$(this).parent().css({border:'4px solid rgba(255,255,255,0)', transition:'all 0.3s'});
		},
		focusin: function(){
			$(this).parent().css({border:'4px solid rgba(255,255,255,0.2)', transition:'all 0.3s'});
		},
		focusout: function(){
			$(this).parent().css({border:'4px solid rgba(255,255,255,0)', transition:'all 0.3s'});
		}
	});
	
/*--------------------------------------------------------------------------------------------*/	
}); // section6.js