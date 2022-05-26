// $(document).ready(function(){
$(function(){
	var $gnb=$(".hamburger");
	var $depth1=$("header nav");
	var $search_btn=$("#advanced_search_btn");
	var $ads_box=$(".advanced_search");

	$gnb.on("click", function(e){
		// console.log("gnb click");
		e.preventDefault();
		/*
		if($(this).hasClass("opned") == false){
			$(this).addClass("opned");
		}else{
			$(this).removeClass("opned");
		}
		*/
		$(this).toggleClass("opned");
		$depth1.toggleClass("active");
	});
	$search_btn.on("click", function(e){
		e.preventDefault();
		if($ads_box.hasClass("advance_displayed") == false){
			$(this).addClass("active");
			$ads_box.stop()
				.fadeIn(200)
				.addClass("advance_displayed");
		}else{
			$(this).removeClass("active");
			$ads_box.stop()
				.fadeOut(200)
				.removeClass("advance_displayed");
		}
	});

});
var typingBool = false; 
    var typingIdx=0; 
    var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다 
    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
       typingBool=true; 
       
       var tyInt = setInterval(typing,100); // 반복동작 
     } 
     
     function typing(){ 
       if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
         $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
         typingIdx++; 
       } else{ 
         clearInterval(tyInt); //끝나면 반복종료 
       } 
     }  