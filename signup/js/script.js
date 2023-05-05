//tab
$(function () {
  $(".top-menu>ul>li").click(function () {
    $(".top-menu>ul>li").removeClass("on");
    $(this).addClass("on");
  });
});

// checkbox
$(function () {
  $("#checkAll").click(function () {
    if ($("#checkAll").prop("checked")) {
      $(".chkSub").prop("checked", true);
    } else {
      $(".chkSub").prop("checked", false);
    }
    //.prop: 일치하는 요소 집합의 첫번째 요소에 대한 속성 값을 가져옴
  });

  $(".chkSub").click(function () {
    if ($("input[name='check']:checked").length == 4) {
      $("#checkAll").prop("checked", true);
    } else {
      $("#checkAll").prop("checked", false);
    }
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
