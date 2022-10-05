import taskArray from './data.js';

export default class AllTasks {
  constructor(id, description, completed) {
    this.id = id;
    this.description = description;
    this.completed = completed;
  }

  static getTasks() {
    return taskArray;
  }

  static displayTasks() {
    const tasksStore = document.querySelector('.showAll');
    const taskData = AllTasks.getTasks();
    if (taskData.length) {
      const listOfTasks = taskData
        .map(
          (task) =>
            `<div class='flexMenu'>
          <div class='displayTask'>
            <input
            type='checkbox'
            name='title'
            id='title'
            class='add-task-input task-title-input'
            ${task.completed === 'true' ? 'checked' : ''}
          />
            <p>${task.description}</p>
          </div>
          <i class='fa-solid fa-ellipsis-vertical'></i>
          </div>
          <hr>
          <br>`
        )
        .join('');
      tasksStore.innerHTML = listOfTasks;
    } else {
      tasksStore.innerHTML =
        '<span><i> Please Add a Task</i></span>';
      const Complete = document.querySelector('.footer');
      Complete.style.display = 'none';
    }
  }
}
