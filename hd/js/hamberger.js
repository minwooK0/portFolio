
$(function(){
	
    //햄버거메뉴
    $('.menuBtn').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('nav ul').toggleClass('trans');
    });
	


	
	//패럴렉스 스크롤링
	$('.keyvisual').addClass('show');
	
	$(window).scroll(function(){
		const sct = $(window).scrollTop()+500;
		const sctln = $(window).scrollTop();
		
		//로고
		if(sctln>=$('.skills').offset().top-100){
			$('.logo').addClass('show');
			if(sctln>=$('.portflio').offset().top){
				$('.logo').removeClass('show');
			}
		} else {
			$('.logo').removeClass('show');
		}
		//nav
		if(sctln>=$('.skills').offset().top-100){
			$('.menuBtn').addClass('show');
			if(sctln>=$('.portflio').offset().top){
				$('.menuBtn').removeClass('show');
			}
		} else {
			$('.menuBtn').removeClass('show');
		}

});