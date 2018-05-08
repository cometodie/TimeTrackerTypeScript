import { User } from 'firebase';
import { AUTH_USER_SET } from 'constants/session';

export interface UserState {
  authUser: User;
}

export interface SetUser {
  type: typeof AUTH_USER_SET;
  payload: User;
}

export const setUser = (payload: User): SetUser => ({
  type: AUTH_USER_SET,
  payload
});
