function getWindowWidth() {
  let ww = $(window).width();
  if (ww > 990) {
    $("html").addClass("pc").removeClass("mobile");
  } else {
    $("html").addClass("mobile").removeClass("pc");
  }
}
getWindowWidth();
$(window).on("resize", function () {
  getWindowWidth();
});

$("#nav .depth1 > li").on("mouseover", function () {
  if ($("html").hasClass("pc")) {
    $(this).find(".depth2").stop().slideDown();
  }
});
$("#nav .depth1 > li").on("mouseout", function () {
  if ($("html").hasClass("pc")) {
    $(this).find(".depth2").stop().slideUp();
  }
});

$("#nav .depth1 > li").on("click", function () {
  if ($("html").hasClass("mobile")) {
    $(this).find(".depth2").stop().slideToggle();
    $(this).siblings().find(".depth2").slideUp();
  }
});
