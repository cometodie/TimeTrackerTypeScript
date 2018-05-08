import loading from './loader';
import sideBar from './sidebar';
import snackBar from './snackBar';
import timeTrackerReducer, { yearReducer, monthReducer } from './timeTracker';
import sessionReducer from './session';

import { combineReducers } from 'redux';

export default combineReducers({
  loading,
  sideBar,
  snackBar,
  currentMonth: monthReducer,
  currentYear: yearReducer,
  sessionState: sessionReducer,
  timeTrackerState: timeTrackerReducer
});
