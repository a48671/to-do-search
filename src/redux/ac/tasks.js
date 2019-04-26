import {
  ADD_TASK,
  FILTER_TASKS,
  SHOW_ALL_TASKS,
  CHECK_TASK,
} from '../constants/tasks';

export const addTask = value => {
  const taskId = Date.parse(new Date()) + String(Math.random());

  return {
    type: ADD_TASK,
    payload: {
      task: {
        id: taskId,
        title: value,
        done: false,
        filter: true,
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

export const showAllTasks = () => {
  return {
    type: SHOW_ALL_TASKS,
    payload: {
      tasks: [],
      filter: false,
    },
  };
};

export const checkTask = index => {
  return {
    type: CHECK_TASK,
    payload: {
      index,
    },
  };
};
