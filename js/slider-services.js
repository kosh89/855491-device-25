const servicesBtnsNodeList = document.querySelectorAll('.services__button');
const serviceBtnsArr = [];
const servicesSlides = document.querySelectorAll('.services__info');
const btnActiveClass = 'services__button--active';
const servicesActiveSlide = 'services__info--active';

for (let i = 0; i < servicesBtnsNodeList.length; i++) {
  servicesBtnsNodeList[i].addEventListener('click', function () {    
    document.querySelector('.' + btnActiveClass).classList.remove(btnActiveClass);
    this.classList.add(btnActiveClass);
    document.querySelector('.' + servicesActiveSlide).classList.remove(servicesActiveSlide);
    servicesSlides[i].classList.add(servicesActiveSlide);    
  })
}