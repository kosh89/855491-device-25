const sliderBtns = document.querySelectorAll('.slider__button');
const slides = document.querySelectorAll('.slider__item');
const sliderActiveClass = 'slider__item--active';

for (let i = 0; i < sliderBtns.length; i++) {
  sliderBtns[i].addEventListener('click', function (evt) {    
    const btnAttr = evt.target.dataset.slide;
    for (let j = 0; j < slides.length; j++) {
      let slideAttr = slides[j].dataset.slide;      
      if (btnAttr === slideAttr) {        
        slides[j].classList.add(sliderActiveClass);
      } else {
        slides[j].classList.remove(sliderActiveClass);
      }
    }
  })
}