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
  arrows: false,
  autoplay: true,
  speed: 8000,
  autoplaySpeed: 8000,
  infinite: true,
  cssEase: "linear",
  pauseOnHover: false,
  slidesToShow: 5,
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

export const hitsSliderParams = {
  slidesToShow: 5,
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
