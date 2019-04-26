import { ADD_TASK } from '../constants/tasks';

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        ...payload.task,
      };
    default:
      return state;
  }
};
