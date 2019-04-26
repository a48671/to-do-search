import { ADD_TASK, FILTER_TASKS } from '../constants/tasks';
import { fromJS, List } from 'immutable';

const saveLocalTasks = window.localStorage.getItem('to_do_tasks')
  ? JSON.parse(window.localStorage.getItem('to_do_tasks'))
  : [];

const initialState = {
  tasks: [...saveLocalTasks],
  filteredTasks: [],
  filter: false,
};

export default (state = fromJS(initialState), action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TASK:
      return state.update('tasks', value => value.push(payload.task));
    case FILTER_TASKS:
      return state
        .update('filteredTasks', () => new List(payload.tasks))
        .update('filter', () => payload.filter);
    default:
      return state;
  }
};
