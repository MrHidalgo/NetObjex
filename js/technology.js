$(function () {
  $(".futures__tabs-link").on("click", function(e) {
    e.preventDefault();

    var elem = $(this),
      elemNum = elem.attr("data-tabs-header");

    $(".futures__tabs-link").removeClass("is-active");
    elem.addClass("is-active");

    $(".futures__tabs-body").removeClass("is-active");
    $(".futures__tabs-body[data-tabs-body='" + elemNum + "']").addClass("is-active");
  });
});