import { User } from 'firebase';
import { UserState, SetUser, AUTH_USER_SET } from 'actions/sessionActions';

const INITIAL_STATE: UserState = {
  authUser: null
};

const sessionReducer = (state: UserState = INITIAL_STATE, action: SetUser): UserState => {
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
