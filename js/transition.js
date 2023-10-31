document.addEventListener("DOMContentLoaded", function(event) { 
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    
    setInterval(() => {
      slides[currentSlide].style.opacity = 0;
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.opacity = 1;
    }, 2000); 
  });
  