//tab
$(function () {
  $(".top-menu>ul>li").click(function () {
    $(".top-menu>ul>li").removeClass("on");
    $(this).addClass("on");
  });
});

// main slide
function slide() {
  var wid = 0; //1920px = 0
  var i = 0; //인디케이터의 (가짜)index
  var slide_length = 0; //슬라이드이미지의 (가짜)index
  var $indiLi = $(".main-indi>li"); // 변수 앞에 $(선택자): 태그를 불러오는 변수(태그변수)
  var $mainPanel = $(".img-panel"); //var $indiLi를 풀어서 쓸 때와 같음
  var $panelLi = $mainPanel.children("li");

  //tablet
  var $tabletPanel = $(".img-panel-tablet");
  var $tabletPanelli = $tabletPanel.children("li");

  //mobile
  var $mobilePanel = $(".img-panel-mobile");
  var $mobilePanelli = $mobilePanel.children("li");

  //초기화 == 0
  function init() {
    wid = $(".main-slide").width(); //1920px
    i = $(".main-indi>li.main-indi-on").index(); //인디케이터의 (진짜)index
    slide_length = $indiLi.length; //슬라이드의 갯수 = 인디케이터의 li갯수
  }

  //event(실행되는속성들): 인디케이터, next, prev
  function slideEvent() {
    $indiLi.click(function () {
      i = $(this).index(); //0이 내가 선택한 인디케이터 li의 인덱스로 맞춰짐
      slideMove(); //함수로 지정해 놓은 i가 여기서 생김!!
    });

    $(".main-next").click(function () {
      nextPlay();
    });

    $(".main-prev").click(function () {
      prevPlay();
    });

    //자동함수
    autoPlay();
    autoPlayStop();
    autoPlayRestart();
  }

  //next(함수)
  function nextPlay() {
    if (i == slide_length - 1) {
      //(진짜)index
      i = 0;
    } else {
      i++;
    }
    slideMove();
  }

  //prev(함수)
  function prevPlay() {
    if (i == 0) {
      i = slide_length - 1;
    } else {
      i--;
    }
    slideMove();
  }

  //슬라이드이동(함수)
  function slideMove() {
    $mainPanel.stop().animate({ "margin-left": -wid * i });
    $tabletPanel.stop().animate({ "margin-left": -wid * i });
    $mobilePanel.stop().animate({ "margin-left": -wid * i });
    //이미지가 보여지는 화면에 움직임(animate,슬라이드모션), left로 이미지가 차지할 여백 공간 만들기, css는 뚝뚝 끊어지듯이 넘어감
    $indiLi.removeClass("main-indi-on");
    //인디케이터 li on활성화 요소(클래스) 먼저 지우고,
    $indiLi.eq(i).addClass("main-indi-on");
    //인디케이터 li on활성화 요소(클래스) 넣어줌, 조건: eq(현재 인덱스)
  }

  //자동함수
  function autoPlay() {
    auto = setInterval(function () {
      nextPlay();
    }, 4000);
  }
  function autoPlayStop() {
    $panelLi.mouseenter(function () {
      //mouseenter, mouseleave: 지정한 영역 안에서 이벤트 발생
      clearInterval(auto); //삭제
    });
    $tabletPanelli.mouseenter(function () {
      clearInterval(auto);
    });
    $mobilePanelli.mouseenter(function () {
      clearInterval(auto);
    });
  }
  function autoPlayRestart() {
    $panelLi.mouseleave(function () {
      //초기화되었으니,
      auto = setInterval(function () {
        //다시 지정해줘야 함
        nextPlay();
      }, 4000);
    });
    $tabletPanelli.mouseleave(function () {
      auto = setInterval(function () {
        nextPlay();
      }, 4000);
    });
    $mobilePanelli.mouseleave(function () {
      auto = setInterval(function () {
        nextPlay();
      }, 4000);
    });
  }

  //브라우저사이즈(함수)->생략가능(width값이 %일 때 사용)
  function resize() {
    $(window).resize(function () {
      init();
      $mainPanel.css({ "margin-left": -wid * i });
      $tabletPanel.css({ "margin-left": -wid * i });
      $mobilePanel.css({ "margin-left": -wid * i });
      //.css 메서드는 바로바로 변환되기 위해서(만약 .animate를 사용할 경우 초수를 짧게 지정해야 함)
    });
  }

  init(); //document.ready 실행하기 전에 준비 상태
  slideEvent(); //document.ready 실행하기 전에 준비 상태
  resize(); //브라우저 너비를 받아오기 때문에 width가 %일때만 사용(현재는 px고정값이기 때문에 생략함)
}
$(document).ready(function () {
  slide();
});

//popup
$(function () {
  $(".popup-btn").click(function () {
    $(".popup").hide();
  });
});

//section1 상품 슬라이드
function contSlide() {
  var wid = 0;
  var i = 0;
  var slide_length = 0;
  var $indiLi = $(".section1-indi>ul>li");
  var $mainPanel = $(".section1-slide");
  var $panelLi = $mainPanel.children("div");

  //초기화
  function init() {
    wid = $(".section1-slide").width();
    i = $(".section1-indi>ul>li.section1-indi-on").index();
    slide_length = $indiLi.length;
  }

  //event
  function slideEvent() {
    $indiLi.click(function () {
      i = $(this).index();
      slideMove();
    });
    //자동함수
    autoPlay();
    autoPlayStop();
    autoPlayRestart();
  }

  //next(함수)
  function nextPlay() {
    if (i == slide_length - 1) {
      i = 0;
    } else {
      i++;
    }
    slideMove();
  }

  //슬라이드이동(함수)
  function slideMove() {
    $mainPanel.stop().animate({ "margin-left": -wid * i });
    $indiLi.removeClass("section1-indi-on");
    $indiLi.eq(i).addClass("section1-indi-on");
  }

  //자동함수
  function autoPlay() {
    auto = setInterval(function () {
      nextPlay();
    }, 4000);
  }
  function autoPlayStop() {
    $panelLi.mouseenter(function () {
      clearInterval(auto); //삭제
    });
  }
  function autoPlayRestart() {
    $panelLi.mouseleave(function () {
      auto = setInterval(function () {
        nextPlay();
      }, 4000);
    });
  }

  //브라우저사이즈(함수)
  function resize() {
    $(window).resize(function () {
      init();
      $mainPanel.css({ "margin-left": -wid * i });
    });
  }

  init();
  slideEvent();
  resize();
}
$(document).ready(function () {
  contSlide();
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
