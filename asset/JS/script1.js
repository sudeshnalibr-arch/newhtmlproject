const collectionsSwiper = new Swiper('.collections-swiper', {
  // 3.5 slides visible on desktop monitors, showing the trailing half card going out of bounds
  slidesPerView: 1.2, 
  spaceBetween: 24,
  loop: true,
  
  navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  },
  
  // Adaptive scaling responsive breakpoints
  breakpoints: {
    576: {
      slidesPerView: 2.2,
      spaceBetween: 24
    },
    1024: {
      slidesPerView: 3, /* Fits 3 cards in clear focus + 4th card at 50% opacity/slice width edge cutoff */
      spaceBetween: 30
    }

    
  }
});