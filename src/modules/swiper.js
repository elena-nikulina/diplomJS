import Swiper, { Navigation, Autoplay } from 'swiper';

const swiper = () => {

    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Autoplay],
      speed: 500,
        loop: true,
        slidesPerView: 3,
        //spaceBetween: 10,
        //centeredSlides: true,
        autoplay: true,
          breakpoints: {
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }

        });

}

export default swiper;