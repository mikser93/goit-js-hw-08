import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const email = form.querySelector('input');
const name = form.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', formSubmit);
form.addEventListener('input', throttle(formInput, 500));

exampleForm();

function formSubmit(event) {
  event.preventDefault();
  const formData = {
    email: email.value,
    message: name.value,
  };
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  event.currentTarget.reset();
}

function formInput() {
  const formData = {
    email: email.value,
    message: name.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function exampleForm() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    email.value = savedMessage.email;
    name.value = savedMessage.message;
  }
}
