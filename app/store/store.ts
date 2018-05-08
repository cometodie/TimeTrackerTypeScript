import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { UserState } from 'actions/sessionActions';
import { TimeState } from 'actions/timeActions';
import rootReducer from '../reducers';

export interface Store {
  sessionState: UserState;
  timeTrackerState: TimeState;
  currentMonth: number;
  currentYear: number;
  sideBar: boolean;
  snackBar: string;
}

const loggerMiddleware = createLogger();

const configureStore = (initialState?: Store) => {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk, loggerMiddleware)));
};

const store = configureStore();

export default store;
