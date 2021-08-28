$(function(){ // section8.js
/*-----------------------------------------------------------------------------------------------------------*/	
	
	var cnt=[0,0,0,0], setId=[];
	var counter = {
			counter0Fn : function(){
				if( cnt[0] < 780 ){
					cnt[0]++;
					$('.count-number').eq(0).text(cnt[0]);
				}
				else{
					clearInterval(setId);
				}
			},
			counter1Fn : function(){
				if( cnt[1] < 987 ){
					cnt[1]++;
					$('.count-number').eq(1).text(cnt[1]);
				}
				else{
					clearInterval(setId);
				}
			},
			counter2Fn : function(){
				if( cnt[2] < 350 ){
					cnt[2]++;
					$('.count-number').eq(2).text(cnt[2]);
				}
				else{
					clearInterval(setId);
				}
			},
			counter3Fn : function(){
				if( cnt[3] < 166 ){
					cnt[3]++;
					$('.count-number').eq(3).text(cnt[3]);
				}
				else{
					clearInterval(setId);
				}
			},
			init : function(){
				setId[0] = setInterval(counter.counter0Fn, 12.820513);
				setId[1] = setInterval(counter.counter1Fn, 10.131712);
				setId[2] = setInterval(counter.counter2Fn, 28.571429);
				setId[3] = setInterval(counter.counter3Fn, 60.240964);
			}
	};
	
	counter.init();

/*-----------------------------------------------------------------------------------------------------------*/	
}); // section8.js