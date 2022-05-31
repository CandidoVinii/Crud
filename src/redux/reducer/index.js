import { combineReducers } from 'redux';
import { reducerLogin } from './reducerLogin';
import { reducerTasks } from './reducerTasks';

export const root = combineReducers({ user: reducerLogin, task: reducerTasks });
