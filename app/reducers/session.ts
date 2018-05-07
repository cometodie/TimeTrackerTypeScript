import { User } from 'firebase';
import { IUserState, UserAction, AUTH_USER_SET } from 'actions/sessionActions';

const INITIAL_STATE: IUserState = {
  authUser: null
};

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
