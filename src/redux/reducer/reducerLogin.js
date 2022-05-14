import { CHANGE_LOGIN } from "../action/action";

const INITIAL_STATELOGIN = {
  login: {
    email: '',
    password: '',
  },
};


export const reducerLogin = ( state = INITIAL_STATELOGIN, action ) => {
  switch(action.type) {
    case CHANGE_LOGIN :
      return {
        ...state,
        login: action.payload,
      }
    default:
      return state
  }
};