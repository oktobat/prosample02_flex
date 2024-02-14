function getWindowWidth() {
  let ww = $(window).width();
  if (ww > 990) {
    $("html").addClass("pc").removeClass("mobile");
    $("#header #nav .depth1 > li").removeClass("on").find(".depth2").hide();
    if ($("#header #nav").parent().is(".cover")) {
      $("#header #nav").unwrap();
    }
  } else {
    $("html").addClass("mobile").removeClass("pc");
    $("#header .menuopen")
      .find("i")
      .removeClass("fa-times")
      .addClass("fa-bars");
    $("#header #nav").removeClass("on");
  }
}
getWindowWidth();
$(window).on("resize", function () {
  getWindowWidth();
});

$("#nav .depth1 > li").on("mouseover", function () {
  if ($("html").hasClass("pc")) {
    $(this).find(".depth2").stop().slideDown();
    $(this).addClass("on");
  }
});
$("#nav .depth1 > li").on("mouseout", function () {
  if ($("html").hasClass("pc")) {
    $(this).find(".depth2").stop().slideUp();
    $(this).removeClass("on");
  }
});

$("#header .menuopen").on("click", function () {
  if (!$(this).find("i").hasClass("fa-times")) {
    $(this).find("i").addClass("fa-times").removeClass("fa-bars");
    $(this).next().wrap("<div class='cover'></div>");
    $(this).next().find("#nav").addClass("on");
  } else {
    $(this).find("i").addClass("fa-bars").removeClass("fa-times");
    $(this).next().find("#nav").removeClass("on");
    $(this).next().find("#nav").unwrap();
  }
});

$("#header #nav .depth1 > li > a").on("click", function () {
  if ($("html").hasClass("mobile") && $(this).next().is(".depth2")) {
    $(this).next().stop().slideToggle();
    $(this).parent().toggleClass("on");
    $(this).parent().siblings().find(".depth2").slideUp();
    $(this).parent().siblings().removeClass("on");
    return false;
  }
});

// 팝업창 열고닫기
$(".popup .close button").on("click", function () {
  if ($(this).prev().prop("checked")) {
    let tts = Date.now() + 100000;
    const obj = {
      check: "yes",
      expire: tts,
    };
    localStorage.setItem("objkey", JSON.stringify(obj));
  }
  $(".popup").removeClass("on");
});

$(window).on("load", function () {
  let objString = localStorage.getItem("objkey");
  if (objString) {
    const obj = JSON.parse(objString);
    if (Date.now() > obj.expire) {
      $(".popup").addClass("on");
      localStorage.removeItem("objkey");
    } else {
      $(".popup").removeClass("on");
    }
  } else {
    $(".popup").addClass("on");
  }
});
