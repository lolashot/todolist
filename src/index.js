import _ from 'lodash';
import './style.css';
import AllTasks from './modules/allTasks';

document.addEventListener('DOMContentLoaded', () => {
  AllTasks.displayTasks();
});
