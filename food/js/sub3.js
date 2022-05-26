	$(function(){
	/*var gap=110;
	var topArray=new Array();
	for(var i=1; i<=5; i++){
		topArray.push($(".content li"+i).offset().top);
	}
	topArray.push($("body, html").height());
*/
	$(window).scroll(function(){
		h=$(window).scrollTop();
		if(h>200){
	$(".content .thumb").addClass("on");
		}	
	});
	$(window).trigger("scroll");
});