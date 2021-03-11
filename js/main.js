$(function () {

  $(".menu a, .footer-up__link").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.menu__btn, .menu li').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.news-slider__items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  });

  $('.select__list').styler();

  $('.review-slider__items').slick({
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
      breakpoint: 1380,
      settings: {
        arrows: false,
      },
    }, 
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 4,
          arrows: true,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 4,
          arrows: false,
        },
      },
    ]
  });

  var mixer = mixitup('.portfolio__content');

});


document.querySelector('.select__list').onchange = function () {
  const a = document.createElement('a')
  a.href = this.value
  a.click()
}