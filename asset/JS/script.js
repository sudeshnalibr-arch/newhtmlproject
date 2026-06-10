document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.reflections-swiper', {
    // 1. Enable continuous infinite looping
    loop: true,
    
    // 2. Configure smooth automated movement
    autoplay: {
      delay: 3000, // Time in milliseconds (3000ms = 3 seconds) before transitioning to the next slide
      disableOnInteraction: false, // Keeps autoplay running even after the user drags or clicks a slide
    },

    slidesPerView: 1,
    spaceBetween: 24,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      // When window width is >= 768px (Tablets)
      768: {
        slidesPerView: 2,
      },
      // When window width is >= 1024px (Desktop)
      1024: {
        slidesPerView: 3,
        
      }
    }
  });
});