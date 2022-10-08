import './style.css';
import EventObj, { data, input } from './modules/addTask.js';

const save = document.querySelector('#save');

// Render tasks to DOM
window.onload = EventObj.createEvent();

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    EventObj.addList();
    EventObj.createEvent();
    input.value = '';
  }
});

save.addEventListener('click', () => {
  EventObj.addList();
  EventObj.createEvent();
  input.value = '';
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('to-do')) {
    e.target.parentElement.classList.add('#ff0');
  }
});
// Task complete checker.
const done = document.querySelector('.completed');
done.addEventListener('click', () => {
  const filterd = data.filter((x) => x.done !== true);
  localStorage.setItem('data', JSON.stringify(filterd));
  EventObj.createEvent();
  window.location.reload();
});