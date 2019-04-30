import { createSelector } from 'reselect';

export const felterSelector = createSelector(
  data => data.tasks,
  data => data.value,
  (tasks, value) =>
    tasks.reduce((acc, task, index) => {
      const indexConcurrence = ~task.title.indexOf(value);

      const foundTask = task;
      foundTask.indexMain = index;

      if (indexConcurrence) {
        return [...acc, foundTask];
      }
      return acc;
    }, [])
);
