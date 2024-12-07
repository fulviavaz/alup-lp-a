var swiper = new Swiper(".swiper", {
    loop: true,
      pagination: {
         el: ".swiper-pagination",
          clickable: true,
     },
       breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 30
           },
           1280: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  },     
    });