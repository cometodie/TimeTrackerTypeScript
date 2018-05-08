import { connect, Dispatch } from 'react-redux';

import { setSnackBar, IUtilActions, SetSnackBar } from 'actions/utilities';
import { User } from 'firebase';
import { SetUser, setUser } from 'actions/sessionActions';
import SignUpPage from 'components/auth/SignUp';

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

export default connect(null, mapDispatchToProps)(SignUpPage);
