// menu
$(document).ready(function () {
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

    // hover
    $(".red1").hide();
    $(".red").hover(function () {
        $(".red1").toggle();
    });
    $(".green1").hide();
    $(".green").hover(function () {
        $(".green1").toggle();
    });
    $(".yellow1").hide();
    $(".yellow").hover(function () {
        $(".yellow1").toggle();
    });
    $(".blue1").hide();
    $(".blue").hover(function () {
        $(".blue1").toggle();
    });
    $(".purple1").hide();
    $(".purple").hover(function () {
        $(".purple1").toggle();
    });

});

// layer popup
function setCookie(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function closeWin() {
    if (document.notice_form.chkbox.checked) {
        setCookie("maindiv", "done", 1);
    }
    document.all['divpop'].style.visibility = "hidden";
}

cookiedata = document.cookie;
if (cookiedata.indexOf("maindiv=done") < 0) {
    document.all['divpop'].style.visibility = "visible";
} else {
    document.all['divpop'].style.visibility = "hidden";
}
