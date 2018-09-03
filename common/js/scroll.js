$(function(){	
		/*scroll.js下部スクロールの設定*/
		$(document).ready(function(){
			$('#loopSlide ul').simplyScroll({
            	autoMode: 'loop',
            	speed: 1,
            	frameRate: 24,
            	horizontal: true,
            	pauseOnHover:   true,
            	pauseOnTouch: true
        	});
		});
		
		
		$('.aboutmove01').hover(function(){
			$(".aboutmove01").stop().animate({ 
    			 borderWidth: "20px",
 			 }, 0 );
			
			$('.aboutmove01').css('background','#fbf4ff');
			 
		}, function(){
			$(".aboutmove01").stop().animate({ 
    			 borderWidth: "10px",
 			 }, 500 );
			 
			 $('.aboutmove01').css('background','white');
		});
		
		
		$('.aboutmove02').hover(function(){
			$(".aboutmove02").stop().animate({ 
    			 borderWidth: "20px",
 			 }, 100 );
			
			$('.aboutmove02').css('background','#fffce8');
			 
			 
		}, function(){
			$(".aboutmove02").stop().animate({ 
    			 borderWidth: "10px",
 			 }, 500 );
			 
			 $('.aboutmove02').css('background','white');
		});
		
		$('.aboutmove03').hover(function(){
			$(".aboutmove03").stop().animate({ 
    			 borderWidth: "20px",
 			 }, 100 );
			
			$('.aboutmove03').css('background','#fff7fb');
			 
			 
		}, function(){
			$(".aboutmove03").stop().animate({ 
    			 borderWidth: "10px",
 			 }, 500 );
			 
			 $('.aboutmove03').css('background','white');
		});

});


