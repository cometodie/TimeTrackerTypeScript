import { User } from "firebase";

// import { AUTH_USER_SET } from '../../constants/session';
// import { createAction } from 'redux-actions';
// import { User } from '../models/action';

// export const setAuthUser = createAction<User, User>(
//   AUTH_USER_SET,
//   (authUser: User) => authUser
// );
//  => {
//   return {
//     type: AUTH_USER_SET,
//     authUser: action
//   };
// };
export interface IUserState {
    authUser: User
  }

  
  export const AUTH_USER_SET = 'user/SET';
  type AUTH_USER_SET = typeof AUTH_USER_SET;
  
  export interface SetAction {
    type: AUTH_USER_SET;
    payload: User;
  }
  
  export type UserAction = SetAction; 

  export const set = (payload: User): SetAction => ({
    type: AUTH_USER_SET,
    payload
  });