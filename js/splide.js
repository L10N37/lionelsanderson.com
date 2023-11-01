const hobbyistSplide = new Splide('#hobbyistCarousel', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 1,
    autoplay: true, // Enable auto-scrolling
    interval: 1500, // Set the time interval (in milliseconds)
  });
  
  const fullStackSplide = new Splide('#fullStackCarousel', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 1,
    autoplay: true, // Enable auto-scrolling
    interval: 1500, // Set the time interval (in milliseconds)
  });
  
  hobbyistSplide.mount();
  fullStackSplide.mount();
  