$(document).ready(function(){
	var w=$(window).width();
	var total=2;
	var current=0;
	var distance= new Array();

	for(var i = 0; i < total; i++){
		distance.push(i*w)
	}

	$('a[href=""]').click(function(e){
		e.preventDefault();
	});

	var id = setInterval(function(){
		rightMoving();
	},2500);

	$(window).resize(function(){
		setTimeout(function(){
			w=$(window).width();
			h=$(".slide_box img").height();

			$(".main_visual li").animate({width:w},0);
			$(".main_visual").animate({height:h}, 0);
			distance = new Array();

			for(var i = 0; i < total; i++){
				distance.push(i*w);
			}
		}, 100);
	});

	$(window).trigger("resize");
	  $("")



	function leftMoving(){
		$(".main_visual ul li:last").clone().prependTo(".main_visual ul");
		$(".main_visual ul").stop().animate({"margin-left":"-="+w+"px"}, 0);
		$(".main_visual ul").stop().animate({"margin-left":"+="+w+"px"}, 400 , function(){

			$(".main_visual ul li:last").remove();
			if(current > 0){
				current--;
				$(".current02").css({"display":"none"});
			    $(".current01").css({"display":"inline-block"});
			}else{
				current=total-1;
				$(".current01").css({"display":"none"});
			    $(".current02").css({"display":"inline-block"});

			}

			var arrayData=distance.shift();

			distance.push(arrayData);
		});
	}

	function rightMoving(){
		$(".main_visual ul li:first").clone().appendTo(".main_visual ul");
		$(".main_visual ul").stop().animate({"margin-left":"-="+w+"px"}, 300, function(){
			$(".main_visual ul").css({"margin-left":"+="+w+"px"});
			$(".main_visual ul li:first").remove();
			if(current < total-1){
				current++;
				$(".current01").css({"display":"none"});
			    $(".current02").css({"display":"inline-block"});
			}else{
				current=0;
				$(".current02").css({"display":"none"});
			    $(".current01").css({"display":"inline-block"});
			}

			var arrayData=distance.pop();
			distance.unshift(arrayData);
		});
	}

	$(".btn_wrap .prev").click(function(){
		leftMoving();
	});

	$(".btn_wrap .next").click(function(){
		rightMoving();
	});

	/*timerID = 0;
	function play(){
		rolling();
		$("#pause").click(function(){
			clearTimeout(timerID);
			timerID = 0;
		});*/

	$("#pause").click(function(){
		clearTimeout(id);
		$("#pause").css({"display":"none"});
		$("#play").css({"display":"inline-block"});
	});

	$("#play").click(function(){

		id=setInterval(function(){ 
         			rightMoving();
         		}, 2500); 
		$("#pause").css({"display":"inline-block"});
		$("#play").css({"display":"none"});
	});
	


	
});

$(document).ready(function($) {
	var instaswiper = new Swiper('.instar_box', {
		initialSlide: 0,
		slidesPerView: 'auto',
		loop: true,
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: true,
		},
	});
});


