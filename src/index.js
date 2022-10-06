import './style.css';
import AllTasks from './modules/allTasks.js';

document.addEventListener('DOMContentLoaded', () => {
  AllTasks.displayTasks();
});
import './style.css';
import EventObj, { data, input } from './modules/addEvent.js';

const press = document.querySelector('#enter');
const done = document.querySelector('.clear-done');

// Render tasks to DOM
window.onload = EventObj.createEvent();

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    EventObj.addList();
    EventObj.createEvent();
    input.value = '';
  }
});

press.addEventListener('click', () => {
  EventObj.addList();
  EventObj.createEvent();
  input.value = '';
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('to-do')) {
    e.target.parentElement.classList.add('#ff0');
  }
});

done.addEventListener('click', () => {
  const filterd = data.filter((x) => x.complete !== true);
  localStorage.setItem('data', JSON.stringify(filterd));
  EventObj.createEvent();
  window.location.reload();
});