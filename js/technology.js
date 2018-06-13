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

      if(btnName === "vblock-js") {
        var elemVideoIdx = elem.attr("data-block"),
          elemTitle = elem.find(".main__block-text").text();

        var textInsertBlock = $(".main__box-bottom .main__box-title");
        textInsertBlock.html(elemTitle);

        $(".main__box-wrapper").removeClass("is-active");
        $(".main__box-wrapper[data-wrap='" + elemVideoIdx + "']").addClass("is-active");
      }

      if(btnName === "wblock-js") {
        var elemWebIdx = elem.attr("data-block");

        $(".main__box-wrapper").removeClass("is-active");
        $(".main__box-wrapper[data-wrap='" + elemWebIdx + "']").addClass("is-active");
      }
    });
  }

  tourBtn("vblock-js");
  tourBtn("wblock-js");

  var slickPrevArrow = '<div class="prev"></div>';
  var slickNextArrow = '<div class="next"></div>';

  $('.news__slider').not('.slick-initialized').slick({
    prevArrow: slickPrevArrow,
    nextArrow: slickNextArrow,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});