import './style.css';
import EventObj, { input } from './modules/addTask.js';

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
