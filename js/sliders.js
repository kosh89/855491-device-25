const sliderBtns = document.querySelectorAll('.slider__button');
const slides = document.querySelectorAll('.slider__item');
const sliderActiveClass = 'slider__item--active';

/* const servicesBtnsNodeList = document.querySelectorAll('.services__button');
const serviceBtnsArr = [];
const servicesSlides = document.querySelectorAll('.services__info');
const btnActiveClass = 'services__button--active';
const servicesActiveSlide = 'services__info--active'; */

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

/* for (let i = 0; i < servicesBtnsNodeList.length; i++) {
  servicesBtnsNodeList[i].addEventListener('click', function () {    
    document.querySelector('.' + btnActiveClass).classList.remove(btnActiveClass);
    this.classList.add(btnActiveClass);
    document.querySelector('.' + servicesActiveSlide).classList.remove(servicesActiveSlide);
    servicesSlides[i].classList.add(servicesActiveSlide);    
  })
} */