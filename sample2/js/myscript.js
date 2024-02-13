function getWindowWidth() {
  let ww = $(window).width();
  if (ww > 990) {
    $("html").addClass("pc").removeClass("mobile");
    $("#header #nav .depth1 > li").removeClass("on").find(".depth2").hide();
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
  $(this).find("i").toggleClass("fa-bars fa-times");
  $(this).next().toggleClass("on");
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
