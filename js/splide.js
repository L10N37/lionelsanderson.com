const hobbyistSplide = new Splide( '#hobbyistCarousel', {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    perPage: 1,
    autoScroll: {
        speed: 1,
      },
});

const fullStackSplide = new Splide( '#fullStackCarousel', {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    perPage: 1,
    autoScroll: {
        speed: 1,
      },
    
});

  
hobbyistSplide.mount();
fullStackSplide.mount();