import { CHANGE_TASKS, REMOVE_TASK } from '../action/action';

const INITIAL_STATETASKS = {
    saveTask: [],
};

export const reducerTasks = (state = INITIAL_STATETASKS, action) => {
  switch (action.type) {
    case CHANGE_TASKS:
      return {
        ...state,
        saveTask: [...state.saveTask, { id: state.saveTask.length, date: new Date().toDateString(), ...action.payload }],
      };
    case REMOVE_TASK:
      return {
        ...state,
        saveTask: [...state.saveTask.filter(task => task.id !== action.id)]
      }
    default:
      return state;
  }
};
