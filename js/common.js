// 2차 메뉴 배경
$(".depth2_bg").hide();
$(".gnb>li").mouseenter(function () {
  $(".depth2_bg").stop().show();
});
$(".gnb>li").mouseleave(function () {
  $(".depth2_bg").stop().hide();
});

// 기타 메뉴
$(".btn_menu_list").hide();
$(".btn_menu").click(function () {
  $(".btn_menu_list").stop().toggle();
});
$(".btn_menu_list").mouseleave(function () {
  $(".btn_menu_list").hide();
});

// 검색창
$(".search").hide();
$(".btn_search").click(function () {
  $(".search").fadeIn();
});
$(".search_close").click(function () {
  $(".search").fadeOut();
});

// 모바일 메뉴
$(".mgnb").hide();
$(".btn_ham").click(function () {
  $(".mgnb").toggle().stop();
});
$(".mdepth2").hide();
$(".mgnb>li>a").click(function () {
  $(this).siblings().stop().slideToggle();
  $(this).toggleClass("active");
});