
jQuery(function ($) { 
    $(".js-hamburger").on("click", function () {
        $(".js-hamburger").toggleClass("is-active");
        $(".js-drawer").fadeToggle();
    });

$(".js-drawer a[href]").on("click", function () {
    $(".js-hamburger").trigger("click");
});
  //ハンバーガーメニューを開いている時のスクロールを禁止する(背景固定)
let state = false;
let pos;
$(".js-hamburger").on("click", function () {
    if (state == false) {
    pos = $(window).scrollTop();
    $("body").addClass("js-fixed").css({ top: -pos });
    state = true;
    } else {
    $("body").removeClass("js-fixed").css({ top: 0 });
    window.scrollTo(0, pos);
    state = false;
    }
});

    
});
