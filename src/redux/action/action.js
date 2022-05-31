export const CHANGE_LOGIN = 'CHANGE_LOGIN';
export const CHANGE_TASKS = 'CHANGE_TASKS';
export const REMOVE_TASK = 'REMOVE_TASK';

export const changeLogin = (payload) => ({
  type: CHANGE_LOGIN,
  payload,
});

export const changeTasks = (payload) => ({
  type: CHANGE_TASKS,
  payload,
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  id,
});
