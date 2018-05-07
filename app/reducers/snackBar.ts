import { SET_SNACKBAR } from 'constants/utilities';
import { IUtilActions } from 'actions/utilities';

const snackBar = (state: string = '', action: IUtilActions) => {
  if (action.type === SET_SNACKBAR) {
    let newState = Object.assign({}, state);
    newState = action.payload;
    return newState;
  }
  return state;
};

export default snackBar;
