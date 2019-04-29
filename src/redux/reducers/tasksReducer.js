import {
  ADD_TASK,
  CHECK_TASK,
  FILTER_TASKS,
  SHOW_ALL_TASKS,
  DELETE_TASK,
} from '../constants/tasks';
import { fromJS, List, Map } from 'immutable';

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
      return state
        .update('tasks', value => value.push(Map(payload.task)))
        .update('filter', () => payload.filter);

    case FILTER_TASKS:
      return state
        .update('filteredTasks', () => fromJS(payload.tasks))
        .update('filter', () => payload.filter);

    case SHOW_ALL_TASKS:
      return state.update('filter', () => payload.filter);

    case CHECK_TASK:
      if (!state.get('filter')) {
        return state.update('tasks', value =>
          value.update(payload.index, value =>
            value.set(
              'done',
              !state
                .get('tasks')
                .get(payload.index)
                .get('done')
            )
          )
        );
      } else {
        console.log(state.get('filteredTasks'));
        const newState = state.update('filteredTasks', value =>
          value.update(payload.index, value =>
            value.set(
              'done',
              !state
                .get('filteredTasks')
                .get(payload.index)
                .get('done')
            )
          )
        );
        return newState.update('tasks', value =>
          value.update(payload.indexMain, value =>
            value.set(
              'done',
              !state
                .get('tasks')
                .get(payload.indexMain)
                .get('done')
            )
          )
        );
      }

    case DELETE_TASK:
      if (!state.get('filter')) {
        return state.update('tasks', value => value.delete(payload.index, 1));
      } else {
        const newState = state.update('filteredTasks', value =>
          value.delete(payload.index, 1)
        );
        return newState.update('tasks', value =>
          value.delete(payload.indexMain, 1)
        );
      }

    default:
      return state;
  }
};
