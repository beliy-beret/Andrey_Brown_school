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

  const myModal = new bootstrap.Modal(document.getElementById("myModal"));
  setTimeout(() => myModal.show(), 10000);

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
});
