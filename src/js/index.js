$(document).ready(function () {
  setTimeout(() => {
    $(".preloader").css("display", "none");
  }, 1000);
});

$("form[name=price]").change(function (e) {
  e.preventDefault();
  const data = $(this).serializeArray();
  const priceValue = data.reduce((a, b) => a + Number(b.value), 0);
  $(".price__value").text(priceValue);
});
