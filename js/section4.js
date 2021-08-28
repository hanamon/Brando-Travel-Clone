$(function(){ // section4.js
/*----------------------------------------------------------------------------------*/	
	
	$('.section4-right-wrap>li>div').eq(0).show();
	
	$('.section4-toggleBtn').each(function(index){
		$(this).on({
			click: function(){
				
				$('.section4-toggleBtn').not(this).find('strong').removeClass('addSec4Toggle');
				$(this).find('strong').stop().toggleClass('addSec4Toggle');
				
				$('.section4-toggleBtn').not(this).find('.sec4fasIcons').addClass('addSec4Toggle');
				$(this).find('.sec4fasIcons').stop().toggleClass('addSec4Toggle');
				
				$('.section4-right-wrap>li>div').stop().slideUp(300);
				$(this).next().stop().slideToggle(300);
				
			}
		});
	}); 
	
/*----------------------------------------------------------------------------------*/	
}); // section4.js