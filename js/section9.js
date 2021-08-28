$(function(){ // section9.js
/*----------------------------------------------------------------------------------------------------------------------*/
	
	var s=[], a=[], n = $('.section9-slide').length-1;
	var winW = 0;	
		
		s[0]=1;
		autoPlay();
		resizeFn();
		setTimeout( resizeFn, 100 );
		
/*----------------------------------------------------------------------------------------------------------------------*/	
	$('.section9-slide-content-wrap').on({
		mouseenter: function(){
			$(this).find('img').css({transform:'scale(1.2)', opacity:0.6, transition:'all 0.3s'});
		},
		mouseleave: function(){
			$(this).find('img').css({transform:'scale(1)', opacity:1, transition:'all 0.3s'});
		},
		focusin: function(){
			$(this).find('img').css({transform:'scale(1.2)', opacity:0.6, transition:'all 0.3s'});
		},
		focusout: function(){
			$(this).find('img').css({transform:'scale(1)', opacity:1, transition:'all 0.3s'});
		}
	});
/*----------------------------------------------------------------------------------------------------------------------*/	
	$(window).resize(function(){
		resizeFn();
	});
/*----------------------------------------------------------------------------------------------------------------------*/	
	function resizeFn(){
		
		winW = $(window).innerWidth();
		
		if( $(window).innerWidth() > 1200 ){
			$('.section9-slide-wrap>ul>li').css({width:'25%'});
			sFn();
			s[0]=1;
			$('.section9-slide').eq(0).stop().animate({left:(25* 0)+'%'},0);
			$('.section9-slide').eq(1).stop().animate({left:(25* 1)+'%'},0);
			$('.section9-slide').eq(2).stop().animate({left:(25* 2)+'%'},0);
			$('.section9-slide').eq(3).stop().animate({left:(25* 3)+'%'},0);
			$('.section9-slide').eq(4).stop().animate({left:(25* 4)+'%'},0);
			$('.section9-slide').eq(5).stop().animate({left:(25* 5)+'%'},0);
			$('.section9-slide').eq(6).stop().animate({left:(25*-1)+'%'},0);
		}
		else if( $(window).innerWidth() <= 1200 && $(window).innerWidth() > 800 ){
			$('.section9-slide-wrap>ul>li').css({width:'33.333%'});
			sFn();
			s[0]=1;			
			$('.section9-slide').eq(0).stop().animate({left:(33.33333333* 0)+'%'},0);
			$('.section9-slide').eq(1).stop().animate({left:(33.33333333* 1)+'%'},0);
			$('.section9-slide').eq(2).stop().animate({left:(33.33333333* 2)+'%'},0);
			$('.section9-slide').eq(3).stop().animate({left:(33.33333333* 3)+'%'},0);
			$('.section9-slide').eq(4).stop().animate({left:(33.33333333* 4)+'%'},0);
			$('.section9-slide').eq(5).stop().animate({left:(33.33333333* 5)+'%'},0);
			$('.section9-slide').eq(6).stop().animate({left:(33.33333333*-1)+'%'},0);
		}
		else if( $(window).innerWidth() <= 800  && $(window).innerWidth() > 700 ){
			$('.section9-slide-wrap>ul>li').css({width:'50%'});
			sFn();
			s[0]=1;	
			$('.section9-slide').eq(0).stop().animate({left:(50* 0)+'%'},0);
			$('.section9-slide').eq(1).stop().animate({left:(50* 1)+'%'},0);
			$('.section9-slide').eq(2).stop().animate({left:(50* 2)+'%'},0);
			$('.section9-slide').eq(3).stop().animate({left:(50* 3)+'%'},0);
			$('.section9-slide').eq(4).stop().animate({left:(50* 4)+'%'},0);
			$('.section9-slide').eq(5).stop().animate({left:(50* 5)+'%'},0);
			$('.section9-slide').eq(6).stop().animate({left:(50*-1)+'%'},0);
		}
		else if( $(window).innerWidth() <= 700 ){
			$('.section9-slide-wrap>ul>li').css({width:'100%'});
			sFn();
			s[0]=1;	
			$('.section9-slide').eq(0).stop().animate({left:(100* 0)+'%'},0);
			$('.section9-slide').eq(1).stop().animate({left:(100* 1)+'%'},0);
			$('.section9-slide').eq(2).stop().animate({left:(100* 2)+'%'},0);
			$('.section9-slide').eq(3).stop().animate({left:(100* 3)+'%'},0);
			$('.section9-slide').eq(4).stop().animate({left:(100* 4)+'%'},0);
			$('.section9-slide').eq(5).stop().animate({left:(100* 5)+'%'},0);
			$('.section9-slide').eq(6).stop().animate({left:(100*-1)+'%'},0);
		}
	}
/*----------------------------------------------------------------------------------------------------------------------*/
	function autoPlay(){
		setInterval( slideFn, 3000 );
	}
	function sFn(){
		for(i=0;i<=n;i++){ s[i]=0; }
	}
	function slideFn(){
		for( i=0;i<=n;i++ ){
			if( s[i]==1 ){
				if( i==n ){
					slide(0);
					break;
				}
				else{
					slide(i+1);
					break;
				}
			}
		}
	}	
	function slide(z){
		sFn();
		s[z]=1;
		
		if( z==0 ){
			a = [6,0,1,2,3,4,5];
		}
		else if( z==1 ){
			a = [0,1,2,3,4,5,6];
		}
		else if( z==2 ){
			a = [1,2,3,4,5,6,0];
		}
		else if( z==3 ){
			a = [2,3,4,5,6,0,1];
		}
		else if( z==4 ){
			a = [3,4,5,6,0,1,2];
		}
		else if( z==5 ){
			a = [4,5,6,0,1,2,3];
		}
		else if( z==6 ){
			a = [5,6,0,1,2,3,4];
		}
		
		if( $(window).innerWidth() > 1200 ){
			$('.section9-slide').eq(a[0]).animate({left:(25* 0)+'%', opacity:1},0).animate({left:(25*-1)+'%', opacity:1},1800);
			$('.section9-slide').eq(a[1]).animate({left:(25* 1)+'%', opacity:1},0).animate({left:(25* 0)+'%', opacity:1},1800);
			$('.section9-slide').eq(a[2]).animate({left:(25* 2)+'%', opacity:1},0).animate({left:(25* 1)+'%', opacity:1},1800);
			$('.section9-slide').eq(a[3]).animate({left:(25* 3)+'%', opacity:1},0).animate({left:(25* 2)+'%', opacity:1},1800);
			$('.section9-slide').eq(a[4]).animate({left:(25* 4)+'%', opacity:1},0).animate({left:(25* 3)+'%', opacity:1},1800);
			$('.section9-slide').eq(a[5]).animate({left:(25* 5)+'%', opacity:1},0).animate({left:(25* 4)+'%', opacity:1},1800);
			$('.section9-slide').eq(a[6]).animate({left:(25*-1)+'%', opacity:0},0).animate({left:(25* 5)+'%', opacity:0},1800);
		}
		else if( $(window).innerWidth() <= 1200 && $(window).innerWidth() > 800 ){
			$('.section9-slide').eq(a[0]).animate({left:(33.33333333* 0)+'%', opacity:1},0).animate({left:(33.333*-1)+'%', opacity:1},1800);
			$('.section9-slide').eq(a[1]).animate({left:(33.33333333* 1)+'%', opacity:1},0).animate({left:(33.333* 0)+'%', opacity:1},1800);
			$('.section9-slide').eq(a[2]).animate({left:(33.33333333* 2)+'%', opacity:1},0).animate({left:(33.333* 1)+'%', opacity:1},1800);
			$('.section9-slide').eq(a[3]).animate({left:(33.33333333* 3)+'%', opacity:1},0).animate({left:(33.333* 2)+'%', opacity:1},1800);
			$('.section9-slide').eq(a[4]).animate({left:(33.33333333* 4)+'%', opacity:1},0).animate({left:(33.333* 3)+'%', opacity:1},1800);
			$('.section9-slide').eq(a[5]).animate({left:(33.33333333* 5)+'%', opacity:1},0).animate({left:(33.333* 4)+'%', opacity:1},1800);
			$('.section9-slide').eq(a[6]).animate({left:(33.33333333*-1)+'%', opacity:0},0).animate({left:(33.333* 5)+'%', opacity:0},1800);
		}
		else if( $(window).innerWidth() <= 800  && $(window).innerWidth() > 700 ){
			$('.section9-slide').eq(a[0]).animate({left:(50* 0)+'%', opacity:1},0).animate({left:(50*-1)+'%', opacity:1},1800);
			$('.section9-slide').eq(a[1]).animate({left:(50* 1)+'%', opacity:1},0).animate({left:(50* 0)+'%', opacity:1},1800);
			$('.section9-slide').eq(a[2]).animate({left:(50* 2)+'%', opacity:1},0).animate({left:(50* 1)+'%', opacity:1},1800);
			$('.section9-slide').eq(a[3]).animate({left:(50* 3)+'%', opacity:1},0).animate({left:(50* 2)+'%', opacity:1},1800);
			$('.section9-slide').eq(a[4]).animate({left:(50* 4)+'%', opacity:1},0).animate({left:(50* 3)+'%', opacity:1},1800);
			$('.section9-slide').eq(a[5]).animate({left:(50* 5)+'%', opacity:1},0).animate({left:(50* 4)+'%', opacity:1},1800);
			$('.section9-slide').eq(a[6]).animate({left:(50*-1)+'%', opacity:0},0).animate({left:(50* 5)+'%', opacity:0},1800);
		}
		else if( $(window).innerWidth() <= 700 ){
			$('.section9-slide').eq(a[0]).animate({left:(100* 0)+'%', opacity:1},0).animate({left:(100*-1)+'%', opacity:1},1800);
			$('.section9-slide').eq(a[1]).animate({left:(100* 1)+'%', opacity:1},0).animate({left:(100* 0)+'%', opacity:1},1800);
			$('.section9-slide').eq(a[2]).animate({left:(100* 2)+'%', opacity:1},0).animate({left:(100* 1)+'%', opacity:1},1800);
			$('.section9-slide').eq(a[3]).animate({left:(100* 3)+'%', opacity:1},0).animate({left:(100* 2)+'%', opacity:1},1800);
			$('.section9-slide').eq(a[4]).animate({left:(100* 4)+'%', opacity:1},0).animate({left:(100* 3)+'%', opacity:1},1800);
			$('.section9-slide').eq(a[5]).animate({left:(100* 5)+'%', opacity:1},0).animate({left:(100* 4)+'%', opacity:1},1800);
			$('.section9-slide').eq(a[6]).animate({left:(100*-1)+'%', opacity:0},0).animate({left:(100* 5)+'%', opacity:0},1800);
		}
	}
	
/*----------------------------------------------------------------------------------------------------------------------*/		
}); // section9.js