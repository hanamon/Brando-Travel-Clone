$(function(){ // section5.js
/*--------------------------------------------------------------------------------------------*/	

	var win = marL = marB = imgW = imgH = marW = marH = i = j = 0;
	var cnt=-1, cols=4, rows=2, h=0, s=8, z=0, n = $('.section5-Gallery-wrap>li').length;
	var	a = [];
		
		galleryFn(z);

/*--------------------------------------------------------------------------------------------*/	
	$(window).resize(function(){
		galleryFn(z);
	});	
/*--------------------------------------------------------------------------------------------*/	
	$('.galleryBtn').each(function(index){
		$(this).on({
			click: function(){
				$('.galleryBtn').removeClass('addGalleyBtn');
				$(this).addClass('addGalleyBtn');
				z = index;
				galleryFn(index);
			}
		});
	});
/*--------------------------------------------------------------------------------------------*/	
	function galleryFn(z){
		
		if(z==0){
			h = 0;
			s = 8;
			a = [0,1,2,3,4,5,6,7];
		}
		else if(z==1){
			h = 4;
			s = 4;
			a = [1,3,4,7, 0,2,5,6];
		}
		else if(z==2){
			h = 4;
			s = 4;
			a = [0,2,3,5, 1,4,6,7];
		}
		else if(z==3){
			h = 2;
			s = 6;
			a = [2,4, 0,1,3,5,6,7];
		}
		else if(z==4){
			h = 2;
			s = 6;
			a = [1,5, 0,2,3,4,6,7];
		}
	/*-------------------------------------------------------------*/		
		if( $(window).innerWidth() > 1200 ){
			cols = 4;
			marL = 0.01734104;	/*우측 11px*/	
			marB = 0.005780347; /*바텀 11px*/
		}
		else if( $(window).innerWidth() <= 1200 && $(window).innerWidth() > 990 ){
			cols = 3;
			marL = 0.021019442;	/*우측 20px*/	
			marB = 0.010509721; /*바텀 20px*/
		}
		else if( $(window).innerWidth() <= 990  && $(window).innerWidth() > 765 ){
			cols = 2;
			marL = 0.015764582;	/*우측 30px*/	
			marB = 0.015764582; /*바텀 30px*/
		}
		else if( $(window).innerWidth() <= 765 ){
			cols = 1;
			marL = 0;			/*우측  0px*/	
			marB = 0.026274304; /*바텀 50px*/
		}
	/*-------------------------------------------------------------*/	
		win  = $(window).innerWidth();
		rows = parseInt(s/cols+0.9);
		
		imgW = (win-marL*win)/cols;
		imgH = imgW * 0.775;
		
		marW = imgW / win  + marB;
		marH = imgH + marB * win;
		
		$('.section5-Gallery-wrap').css({height:marH*rows});
	/*-------------------------------------------------------------*/	
		for(i=0;i<h;i++){
			$('.section5-Gallery-wrap>li').eq(a[i]).css({transform:'scale(0,0)', transition:'all 0.6s'});
				
		}
		for(i=0;i<=n;i++){
			$('.section5-Gallery-wrap>li').eq(i).css({transform:'scale(0)', transition:'all 0.6s'});		
		}
	/*-------------------------------------------------------------*/	
		cnt=h-1;
		for(i=0; i<rows; i++){
			for(j=0; j<cols; j++){
				cnt++
				$('.section5-Gallery-wrap>li').eq(a[cnt]).stop().css({top:marH*i, left:marW*100*j+'%', width:(imgW/win*100)+'%', height:imgH, marginBottom:marB+'%', marginRight:marL+'%', transform:'scale(1,1)', transition:'all 0.6s'});	
			}
		}
	}
	
/*--------------------------------------------------------------------------------------------*/
}); // section5.js