const writeUsForm = document.querySelector('.write-us');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const formErrorClass = 'form--error';
const formCloseBtn = document.querySelector('.write-us__close');
const formShowBtn = document.querySelector('.information__link--show-form');

let isStorageSupport = true;
let storageName = '';
let storageEmail = '';

formCloseBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  writeUsForm.classList.remove('write-us--active')
})

formShowBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  writeUsForm.classList.add('write-us--active')
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