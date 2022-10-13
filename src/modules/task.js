import getItems from './storage.js';

const addToTasks = (newTask) => {
  const singleTask = {
    description: newTask,
    completed: false,
    index: getItems.length + 1,
  };

  getItems.push(singleTask);
};

export default addToTasks;