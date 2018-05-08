import * as constants from 'constants/utilities';
import { ToggleSideBar } from 'actions/utilities';

const sideBar = (state: boolean = false, action: ToggleSideBar) => {
  if (action.type === constants.TOGGLE_SIDEBAR) {
    let newState = !state;
    return newState;
  }
  return state;
};

export default sideBar;
