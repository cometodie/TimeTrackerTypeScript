import { User } from "firebase";
import { IUserState, UserAction, AUTH_USER_SET } from "../actions/sessionActions";

// import { AUTH_USER_SET } from '../../constants/session';
// import { handleActions, Action } from 'redux-actions';
// import { User, IState } from '../models/action';

// const INITIAL_STATE: IState = <User>{
//   uid: 0,
//   email: ''
// };

const INITIAL_STATE: IUserState = {
  authUser: null
}

const sessionReducer = (state: IUserState = INITIAL_STATE, action: UserAction): IUserState => {
  switch (action.type) {
    case AUTH_USER_SET: {
      return {
        ...state,
        authUser: action.payload
      };
    }
    default:
      return state;
  }
};

export default sessionReducer;