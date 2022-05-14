export const CHANGE_LOGIN = 'CHANGE_LOGIN';
export const CHANGE_TASKS = 'CHANGE_TASKS';

export const changeLogin = (payload) => ({
  type: CHANGE_LOGIN,
  payload,
});

export const changeTasks = (payload) => ({
  type: CHANGE_TASKS,
  payload,
});
