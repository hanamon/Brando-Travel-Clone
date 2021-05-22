$(function(){ // section1-Slide.js
/*-----------------------------------------------------------------------------------------------------*/
	
	var s = [], a = [], t=0, setId=0, n = $('.section1-slide').length-1
		
		function sFn(){
			for(i=0;i<=n;i++){ s[i]=0; }
		}
		s[0]=1;
		navFn(0);	
		autoPlay();
		t=0;
		
/*-----------------------------------------------------------------------------------------------------*/	
	//오토플레이 
	function autoPlay(){
		setId = setInterval(nextSlideFn, 3500);
	}
	//네비버튼,익스플버튼 오버 시 : 오토플레이 스탑 이벤트
	$('.section1-nav-wrap>ul, .exploreBtn').on({
		mouseenter: function(){
			clearInterval(setId);
		},
		mouseleave: function(){
			if(t==0){
				autoPlay();
			}
		}
	});
/*-----------------------------------------------------------------------------------------------------*/	
	//네비버튼 클릭시 : 다음 슬라이드 스무스 이동
	function moveNextSlide(z, clickNum){
		sFn();
		s[clickNum]=1;
		navFn(clickNum);	
		
		if( z==0 && clickNum==2 ){
			$('.section1-slide').eq(0).stop().animate({left:  '0%'},0).animate({left:'-200%'},600);
			$('.section1-slide').eq(1).stop().animate({left:'100%'},0).animate({left:'-100%'},600);
			$('.section1-slide').eq(2).stop().animate({left:'200%'},0).animate({left:   '0%'},600);
		}
		else{
			nextSlide(clickNum);
		}
	}
	//네비버튼 클릭시 : 이전 슬라이드 스무스 이동
	function movePrevSlide(z, clickNum){
		sFn();
		s[clickNum]=1;
		navFn(clickNum);	
		
		if( z==2 && clickNum==0 ){
			$('.section1-slide').eq(0).stop().animate({left:'-200%'},0).animate({left:  '0%'},600);
			$('.section1-slide').eq(1).stop().animate({left:'-100%'},0).animate({left:'100%'},600);
			$('.section1-slide').eq(2).stop().animate({left:   '0%'},0).animate({left:'200%'},600);
		}
		else{
			prevSlide(clickNum);
		}
	}
/*-----------------------------------------------------------------------------------------------------*/	
	//네비게이션 에드클래스
	function navFn(z){
		$('.navBtn').removeClass('addNavBtn');
		$('.navBtn').eq(z).addClass('addNavBtn');
	}
	//네비게이션 클릭 이벤트
	$('.navBtn').each(function(index){
		$(this).on({
			click: function(){
				for(i=0;i<=n;i++){
					if(s[i]==1){
						if( i < index ){
							console.log(i, index);
							moveNextSlide(i, index);
						}
						else if( i > index ){
							movePrevSlide(i, index);
						}
					}
				}
			}
		});
	});
/*-----------------------------------------------------------------------------------------------------*/	
	//다음 슬라이드 함수
	function nextSlideFn(z){
		for(i=0;i<=n;i++){
			if(s[i]==1){
				if(i==n){nextSlide(0);}
				else{nextSlide(i+1);}
			}
		}
	}
	//이전 슬라이드 함수
	function prevSlideFn(z){
		for(i=0;i<=n;i++){
			if(s[i]==1){
				if(i==0){prevSlide(n);}
				else{prevSlide(i-1);}
			}
		}
	}
/*-----------------------------------------------------------------------------------------------------*/	
	//다음 슬라이드
	function nextSlide(z){
		sFn();
		s[z]=1;
		navFn(z);
		
		if(z==0){
			a = [2,0,1];
		}
		else if(z==1){
			a = [0,1,2];
		}
		else if(z==2){
			a = [1,2,0];
		}
		$('.section1-slide').eq(a[0]).stop().animate({left:  '0%'},0).animate({left:'-100%'},1000);
		$('.section1-slide').eq(a[1]).stop().animate({left:'100%'},0).animate({left:   '0%'},1000);
		$('.section1-slide').eq(a[2]).stop().animate({left:'200%'},0).animate({left: '100%'},1000);
	}
	//이전 슬라이드
	function prevSlide(z){
		sFn();
		s[z]=1;
		navFn(z);
		
		if(z==2){
			a = [0,2,1];
		}
		else if(z==1){
			a = [2,1,0];
		}
		else if(z==0){
			a = [1,0,2];
		}
		$('.section1-slide').eq(a[0]).stop().animate({left:   '0%'},0).animate({left: '100%'},1000);
		$('.section1-slide').eq(a[1]).stop().animate({left:'-100%'},0).animate({left:   '0%'},1000);
		$('.section1-slide').eq(a[2]).stop().animate({left:'-200%'},0).animate({left:'-100%'},1000);
	}
	
/*-----------------------------------------------------------------------------------------------------*/	
}); // section1-Slide.js