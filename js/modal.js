const writeUsForm = document.querySelector('.write-us');
const mapPopup = document.querySelector('.map-popup');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const formErrorClass = 'form--error';
const formCloseBtn = document.querySelectorAll('.modal-close');
const formShowBtn = document.querySelector('.information__link--show-form');
const mapShowBtn = document.querySelector('.information__map');
const activeModalClass = 'modal-active';

let isStorageSupport = true;
let storageName = '';
let storageEmail = '';

for (let i = 0; i < formCloseBtn.length; i++) {
  formCloseBtn[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    writeUsForm.classList.remove(activeModalClass);
    mapPopup.classList.remove(activeModalClass);
  })
}

formShowBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  writeUsForm.classList.add(activeModalClass)
})

mapShowBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.add(activeModalClass);
})

try {
  storageName = localStorage.getItem('name');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

if (storageName) {
  name.value = storageName;
}

if (storageEmail) {
  email.value = storageEmail;
}

writeUsForm.addEventListener('submit', function (e) {
  if (!name.value || !email.value || !message.value) {
    e.preventDefault();
    writeUsForm.classList.remove(formErrorClass);
    writeUsForm.offsetWidth = writeUsForm.offsetWidth;
    writeUsForm.classList.add(formErrorClass);
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', name.value);
      localStorage.setItem('email', email.value);
    }
  }
})