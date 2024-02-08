function getWindowWidth() {
  let ww = $(window).width();
  if (ww > 910) {
    $("html").addClass("pc").removeClass("mobile");
    $("#header #nav").css({
      display: "flex",
      width: "auto",
    });
    $("#nav .depth1 > li").removeClass("on");
    $("#nav .depth1 > li").find(".depth2").hide();
  } else {
    $("html").addClass("mobile").removeClass("pc");
    $("#header .menuopen")
      .find("i")
      .removeClass("fa-times")
      .addClass("fa-bars");
    $("#header #nav").css({
      display: "none",
      width: "100%",
    });
  }
}
getWindowWidth();
$(window).on("resize", function () {
  getWindowWidth();
});

$(".slideOuter1 .slideInner").slick({
  autoplaySpeed: 4000,
  speed: 300,
  autoplay: true,
  dots: true,
  arrows: true,
  prevArrow:
    '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa-solid fa-chevron-left"></i></button>',
  nextArrow:
    '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa-solid fa-chevron-right"></i></button>',
});

$(".slideOuter1 .plapau i").on("click", function () {
  if ($(this).hasClass("fa-pause")) {
    $(".slideInner").slick("slickPause");
    $(this).removeClass("fa-pause").addClass("fa-play");
  } else {
    $(".slideInner").slick("slickPlay");
    $(this).removeClass("fa-play").addClass("fa-pause");
  }
});

$(".slideOuter2 .slideInner").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  speed: 300,
  autoplay: true,
  dots: false,
  centerMode: true,
  centerPadding: "100px",
  arrows: true,
  prevArrow:
    '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa-solid fa-chevron-left"></i></button>',
  nextArrow:
    '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa-solid fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 911,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
});

// #nav .depth1 > li에 mouseover하면 class "on"을 추가하고
// #nav .depth1 > li에서 mouseout하면 class "on"을 제거하시오.
// $("#nav .depth1 > li").on("mouseover", function () {
//   $(this).addClass("on");
// });
// $("#nav .depth1 > li").on("mouseout", function () {
//   $(this).removeClass("on");
// });

// $("#nav .depth1 > li").hover(
//   function () {
//     $(this).addClass("on");
//   },
//   function () {
//     $(this).removeClass("on");
//   }
// );

$("#nav .depth1 > li").on("mouseover mouseout", function () {
  if ($("html").hasClass("pc")) {
    $(this).toggleClass("on");
    $(this).find(".depth2").stop().slideToggle(200);
  }
});
$("#nav .depth1 > li").on("click", function () {
  if ($("html").hasClass("mobile")) {
    $(this).toggleClass("on").siblings().removeClass("on");
    $(this).find(".depth2").stop().slideToggle(200);
    $(this).siblings().find(".depth2").stop().slideUp(200);
  }
});

$("#header .menuopen").on("click", function () {
  $(this).next().stop().slideToggle(200);
  if (!$(this).find("i").hasClass("fa-bars")) {
    $("#header #nav .depth2").slideUp();
    $("#nav .depth1 > li").removeClass("on");
    $(this).find("i").addClass("fa-bars").removeClass("fa-times");
  } else {
    $(this).find("i").addClass("fa-times").removeClass("fa-bars");
  }
});
