jQuery(document).ready(function(){

    // all_menu on
    $('.all_menu_btn.win').click(function(){
        $('.all_menu_head').addClass('on');
    });
    
    // all_menu off
    $('.all_menu_head .close_btn').click(function(){
        $('.all_menu_head').removeClass('on');
    });

    // mobile_menu on
    $('.all_menu_btn.mo').click(function(){
        $('.mobile_menu').addClass('on');
        $('.bg').fadeIn();
    });
    
    // mobile_menu off
    $('.mobile_menu .close_btn').click(function(){
        $('.mobile_menu').removeClass('on');
        $('.bg').fadeOut();
    });
    
    // mobile_menu off
    $('.bg').click(function(){
        $('.mobile_menu').removeClass('on');
        $('.bg').fadeOut();
    });

});
    
    
    
    
    