$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function () {
  $(".close-button").click(function () {
    $(".text-mess").hide();
  });
  $(".img-mess").click(function () {
    $(".text-mess").show();
  });
});

