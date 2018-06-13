var msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture;
var touchSupport = (("ontouchstart" in window) || msGesture || window.DocumentTouch && document instanceof DocumentTouch);

// Preloader
$(window).load(function () {
  $('.preloader').fadeOut(1000);
});


// Isotope filter
jQuery(document).ready(function ($) {

  $(".problems_scroller .boxes").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }],
  });
  $(".partner_inner .boxes").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ],
  });
  $(".top10_slides ").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.user_slide').click(function () {
    if (!$(this).hasClass('active')) {
      $('.user_slide').removeClass('active');
      //$('.user_slide').fadeOut(100);
      $('.user_slide').hide();
      var mySlide = $(this).addClass('active').detach();
      mySlide.prependTo('.slider_wrap');
      $('.user_slide').fadeIn(100);
    }

  });

  $('[data-toggle="tooltip"]').tooltip();

  $('#login-form-link').click(function (e) {
    $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
  $('#register-form-link').click(function (e) {
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });


  $('.flow_btn').mouseenter(function () {
    $(this).find('.hover').show();
    //$(this).addClass('current');
  });
  $('.flow_btn').mouseleave(function () {
    $(this).find('.hover').hide();
    //$(this).removeClass('current');
  });

  if ($('.iso-box-wrapper').length > 0) {

    var $container = $('.iso-box-wrapper'),
      $imgs = $('.iso-box img');

    $container.imagesLoaded(function () {

      $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
      });

      $imgs.load(function () {
        $container.isotope('reLayout');
      })

    });

    //filter items on button click

    $('.filter-wrapper li a').click(function () {

      var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({
        filter: filterValue,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        }
      });

      // don't proceed if already selected 

      if ($this.hasClass('selected')) {
        return false;
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

      return false;
    });

  }

});


// jQuery to collapse the navbar on scroll 
$(window).scroll(function () {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function () {

  // ------- Wow animated ------ //
  wow = new WOW(
    {
      mobile: false
    });
  wow.init();


  // Hide Mobile Menu After Clicking On a link
  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });

  /* Parallax section
   -----------------------------------------------*/
  function initParallax() {
    //$('#home').parallax("100%", 0.1);
    $('#feature').parallax("100%", 0.3);
    $('#service').parallax("100%", 0.1);
    $('#about').parallax("100%", 0.3);
    $('#team').parallax("100%", 0.1);
    $('#testimonial').parallax("100%", 0.2);
    $('#portfolio').parallax("100%", 0.3);
    $('#error-home').parallax("100%", 0.1);
    $('#blog').parallax("100%", 0.3);
    $('#blog-home').parallax("100%", 0.2);
    $('#comingsoon-home').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);

  }

  initParallax();

});


$('#tohash1, #home').on('click', function (e) {
  e.preventDefault();
  $('html,body').animate({
    scrollTop: 0
  }, 700);
});


$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 54
        }, 1000);
        return false;
      }
    }
  });
});
  
  	      
	

 
		
		


