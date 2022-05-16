import { CHANGE_TASKS, REMOVE_TASK } from '../action/action';

const INITIAL_STATETASKS = {
  task: {
    saveTask: [],
  },
};

export const reducerTasks = (state = INITIAL_STATETASKS, action) => {
  switch (action.type) {
    case CHANGE_TASKS:
      return {
        ...state,
        task: action.payload,
      };
    case REMOVE_TASK:
      const filteredArray = state.task.saveTask.filter((task) => task !== action.payload);
      return {...state, task: filteredArray}
    default:
      return state;
  }
};
