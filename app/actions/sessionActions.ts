import { User } from 'firebase';

export interface UserState {
  authUser: User;
}

export const AUTH_USER_SET = 'user/SET';
type AUTH_USER_SET = typeof AUTH_USER_SET;

export interface SetUser {
  type: AUTH_USER_SET;
  payload: User;
}

export const setUser = (payload: User): SetUser => ({
  type: AUTH_USER_SET,
  payload
});
