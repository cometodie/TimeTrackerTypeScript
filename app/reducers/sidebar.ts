import { TOGGLE_SIDEBAR } from '../../constants/utilities';
import { IUtilActions } from '../actions/utilities';

const sideBar = (state: boolean = false, action: IUtilActions) => {
  if (action.type === TOGGLE_SIDEBAR) {
    let newState = Object.assign({}, state);
    action.payload = !state;
    newState = action.payload;
    return newState;
  }
  return state;
};

export default sideBar;
