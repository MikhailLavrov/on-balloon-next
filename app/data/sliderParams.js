export const heroSwiperParams = {
  // modules: [Navigation, Pagination, Autoplay, Parallax, EffectFade],
  navigation: true,
  pagination: true,
  parallax: true,
  loop: true,
  preventInteractionOnTransition: true,
  speed: 1000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 5000,
  },
}

export const gallerySliderParams = {
  dots: false,
  slidesToShow: 5,
  arrows: false,
  autoplay: true,
  speed: 8000,
  autoplaySpeed: 8000,
  infinite: true,
  cssEase: "linear",
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1260,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 3,
      }
    }
  ]
};

export const hitsSwiperParams = {
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1260: {
      slidesPerView: 5,
    }
  }
};
