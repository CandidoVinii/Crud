import { CHANGE_LOGIN } from '../action/action';

const INITIAL_STATELOGIN = {
};

export const reducerLogin = (state = INITIAL_STATELOGIN, action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
};
