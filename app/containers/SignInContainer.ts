import { connect, Dispatch } from 'react-redux';

import { setSnackBar, SetSnackBar } from 'actions/utilities';
import SignInPage from 'components/auth/SignIn';
import { setUser, SetUser } from 'actions/sessionActions';
import { User } from 'firebase';

interface MapDispatchState {
  setUser: (user: User) => void;
  setSnackBar: (text: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch<SetSnackBar | SetUser>): MapDispatchState => {
  return {
    setUser: (user: User) => {
      dispatch(setUser(user));
    },
    setSnackBar: (state: string) => {
      dispatch(setSnackBar(state));
    }
  };
};

export default connect(null, mapDispatchToProps)(SignInPage);
