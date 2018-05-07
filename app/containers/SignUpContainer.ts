import { connect, Dispatch } from 'react-redux';
import { setSnackBar, IUtilActions } from 'actions/utilities';
import { SignUpPage } from 'components/auth/SignUp';

const mapDispatchToProps = (dispatch: Dispatch<IUtilActions>) => {
  return {
    setSnackBar: (state: string) => {
      dispatch(setSnackBar(state));
    }
  };
};

export default connect(null, mapDispatchToProps)(SignUpPage);
