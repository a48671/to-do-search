import { ADD_TASK, FILTER_TASKS } from '../constants/tasks';

export const addTask = value => {
  const taskId = Date.parse(new Date()) + String(Math.random());

  return {
    type: ADD_TASK,
    payload: {
      task: {
        id: taskId,
        title: value,
        done: false,
      },
    },
  };
};

export const filterTask = filteredTasks => {
  return {
    type: FILTER_TASKS,
    payload: {
      tasks: [...filteredTasks],
      filter: true,
    },
  };
};
