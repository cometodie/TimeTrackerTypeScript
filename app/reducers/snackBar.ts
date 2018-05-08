import { SET_SNACKBAR } from 'constants/utilities';
import { SetSnackBar } from 'actions/utilities';

const snackBar = (state: string = '', action: SetSnackBar): string => {
  if (action.type === SET_SNACKBAR) {
    let newState = action.payload;
    return newState;
  }
  return state;
};

export default snackBar;
