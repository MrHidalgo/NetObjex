$(function () {
  $("[tabs-link-js]").on("click", function(e) {
    e.preventDefault();

    var elem = $(this),
      elemNum = elem.attr("data-tabs-header");

    $("[tabs-link-js]").removeClass("is-active");
    elem.addClass("is-active");

    $("[tabs-body-js]").removeClass("fadeOut is-active");
    $("[data-tabs-body='" + elemNum + "']").addClass("fadeIn is-active");
  });

  function tourBtn(btnName) {
    $("[" + btnName + "]").on("click", function(e) {
      e.preventDefault();

      var elem = $(this);

      $("[" + btnName + "]").removeClass("is-active");
      elem.addClass("is-active");
    });
  }

  tourBtn("vblock-js");
  tourBtn("wblock-js");

});