import * as constants from 'constants/utilities';
import { IToggleLoading } from 'actions/utilities';

const loading = (state: boolean = false, action: IToggleLoading) => {
  if (action.type === constants.TOGGLE_LOADING) {
    let newState = !state;
    return newState;
  }
  return state;
};

export default loading;
