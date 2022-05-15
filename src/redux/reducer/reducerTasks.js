import { CHANGE_TASKS } from "../action/action";

const INITIAL_STATETASKS = {
  task: {
    saveTask: [],
  },
};

export const reducerTasks = ( state = INITIAL_STATETASKS, action ) => {
  switch(action.type) {
    case CHANGE_TASKS :
      return {
        ...state,
        task: action.payload,
      }
      default:
        return state
  };
}