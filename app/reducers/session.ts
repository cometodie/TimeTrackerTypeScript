import { User } from 'firebase';
import { UserState, UserAction, AUTH_USER_SET } from 'actions/sessionActions';

const INITIAL_STATE: UserState = {
  authUser: null
};

const sessionReducer = (state: UserState = INITIAL_STATE, action: UserAction): UserState => {
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
