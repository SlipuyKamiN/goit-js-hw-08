import throttle from 'lodash.throttle';

const refs = {
  email: document.querySelector('[name="email"]'),
  textarea: document.querySelector('[name="message"]'),
  form: document.querySelector('form'),
};

const FEEDBACK_DATA = 'feedback-form-state';
const feedbackData = {};

const recoveryData = () => {
  const dataToRecover = JSON.parse(localStorage.getItem(FEEDBACK_DATA));
  if (dataToRecover) {
    refs.email.value = dataToRecover.email;
    refs.textarea.value = dataToRecover.message;
  }
};
recoveryData();
const updateFeedbackData = event => {
  feedbackData[event.target.name] = event.target.value;
  localStorage.setItem(FEEDBACK_DATA, JSON.stringify(feedbackData));
};
const onFormSubmitting = event => {
  // 3-й пункт в ДЗ : "виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями"

  //Варіант 1
  //Якщо ввести коректні дані, потім оновити сторінку,
  //і нічого не змінювати в формі, то feedbackData буде порожній об'єкт і законсолиться {}.
  console.log(feedbackData);

  //Варіант 2
  //Показує все коректно, але якийсь складний запис, думаю має бути простіший варіант.
  console.log(JSON.parse(localStorage.getItem(FEEDBACK_DATA)));

  event.preventDefault();

  localStorage.removeItem(FEEDBACK_DATA);

  event.currentTarget.reset();
};

refs.form.addEventListener('input', throttle(updateFeedbackData, 500));
refs.form.addEventListener('submit', onFormSubmitting);
