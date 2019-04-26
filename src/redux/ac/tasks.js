import { ADD_TASK } from '../constants/tasks';

export const addTask = value => {
  const taskId = Date.parse(new Date()) + String(Math.random());

  return {
    type: ADD_TASK,
    payload: {
      task: {
        [taskId]: {
          title: value,
          done: false,
        },
      },
    },
  };
};
