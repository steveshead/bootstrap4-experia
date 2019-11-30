// inspired by https://css-tricks.com/snippets/jquery/smooth-scrolling/

var TopOffset = 50;

$('a[data-smooth]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - TopOffset
          }, 1000);
          return false;
        }
      }
    });

    $(function() {
        var header = $(".navbar-header-full");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 35) {
                header.removeClass('navbar-header-full').addClass("navbar-header-top");
            } else {
                header.removeClass("navbar-header-top").addClass('navbar-header-full');
            }
        });
    });

// timeline js
$(document).ready(function () {
var timelineSwiper = new Swiper ('.timeline .swiper-container', {
  direction: 'vertical',
  loop: false,
  speed: 1600,
  pagination: '.swiper-pagination',
  paginationBulletRender: function (swiper, index, className) {
    var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
    return '<span class="' + className + '">' + year + '</span>';
  },
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  breakpoints: {
    768: {
      direction: 'horizontal',
    }
  }
})});

// carousel
