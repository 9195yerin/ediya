//tab
$(function () {
  $(".top-menu>ul>li").click(function () {
    $(".top-menu>ul>li").removeClass("on");
    $(this).addClass("on");
  });
});

//header 스크롤 내려올때 고정
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $("header").addClass("top-fixed");
    $("main").css("margin-top", "150px");
  } else {
    $("header").removeClass("top-fixed");
    $("main").css("margin-top", "0px");
  }
});
