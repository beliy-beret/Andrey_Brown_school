"use strict";
$(document).ready(function () {
  setTimeout(() => {
    $(".preloader").css("display", "none");
  }, 500);

  $("form[name=price]").change(function (e) {
    e.preventDefault();
    const data = $(this).serializeArray();
    const priceValue = data.reduce((a, b) => a + Number(b.value), 0);
    $(".price__value").text(priceValue);
    $(".price__time").text(Math.floor(priceValue / 50));
  });

  $(window).scroll(function () {
    const scrollDistance = $(this).scrollTop();
    $(".section__title").each((i, item) => {
      if ($(item).offset().top - 120 <= scrollDistance) {
        $(".navbar a").each((i, item) => {
          if ($(item).hasClass("active")) {
            $(item).removeClass("active");
          }
        });
        $(".navbar a").eq(i).addClass("active");
      }
    });
  });

  const myModal = new bootstrap.Modal(document.getElementById("myModal"));
  setTimeout(() => myModal.show(), 10000);

  const carouselComments = new bootstrap.Carousel(
    document.getElementById("carouselComments"),
    {
      ride: false,
    }
  );

  const stats = $(".stats__item-value");
  runningNumbers(100, stats.eq(0));
  runningNumbers(4600, stats.eq(1));
  runningNumbers(340, stats.eq(2));
  runningNumbers(23, stats.eq(3));

  $(".popup-image").magnificPopup({
    type: "image",
    closeOnContentClick: true,
  });
});

function runningNumbers(num, element) {
  let elemVal = 0;
  const step = 15;
  const time = 1000; // ms
  const intervalTiming = Math.round(time / (num / step));
  const interval = setInterval(() => {
    elemVal = elemVal + step;
    if (elemVal > num) {
      element.text(num);
      clearInterval(interval);
    } else {
      element.text(elemVal);
    }
  }, intervalTiming);
}
