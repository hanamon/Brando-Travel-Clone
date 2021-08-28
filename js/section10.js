$(function(){ // section10.js
/*----------------------------------------------------------------------------------------------------------------------*/	
	
	$('.hotelBtn').each(function(z){
		$(this).on({
			click: function(){
				$('.hotelBtn').find('i').removeClass('addSec10Color');
				$('.hotelBtn').removeClass('addSec10Color');
				$('.hotelBtn').parent().removeClass('addSec10Color');
				
				$(this).find('i').addClass('addSec10Color');
				$(this).addClass('addSec10Color');
				$(this).parent().addClass('addSec10Color');
				
				$('.section10-right-wrap').stop().animate({opacity:0},250, function(){
					$('.section10-right-wrap').stop().hide();
					$('.section10-right-wrap').eq(z).stop().show().animate({opacity:1},500);
				});
			}
		});
	});
	
/*----------------------------------------------------------------------------------------------------------------------*/
}); // section10.js