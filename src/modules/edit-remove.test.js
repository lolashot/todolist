import addToTasks from './task.js';
import storedArray from './storage.js';
import removeTask from './remove_task.js';
import editTask from './edit-task.js';
import clearCompletedTask from './clear-completed.js';

describe('test addTask and removeTask', () => {
  test('test add task function', () => {
    addToTasks('first task');
    addToTasks('second task');
    addToTasks('third task');
    expect(storedArray[0].description).toBe('first task');
    expect(storedArray.length).toEqual(3);
  });
  test('test remove task function', () => {
    removeTask(0);
    expect(storedArray).toHaveLength(2);
    expect(storedArray[0].description).toBe('second task');
  });
  test('test edit task function', () => {
    editTask(0, 'changed task');
    expect(storedArray[0].description).toBe('changed task');
  });
  test('test clear completed task function', () => {
    storedArray[1].completed = true;
    clearCompletedTask();
    expect(storedArray).toHaveLength(1);
  });
});