import { SET_SNACKBAR } from 'constants/utilities';
import { ISetSnackBar } from 'actions/utilities';

const snackBar = (state: string = '', action: ISetSnackBar): string => {
  if (action.type === SET_SNACKBAR) {
    let newState = action.payload;
    return newState;
  }
  return state;
};

export default snackBar;
