import * as constants from 'constants/utilities';
import { ToggleLoading } from 'actions/utilities';

const loading = (state: boolean = false, action: ToggleLoading) => {
  if (action.type === constants.TOGGLE_LOADING) {
    let newState = !state;
    return newState;
  }
  return state;
};

export default loading;
