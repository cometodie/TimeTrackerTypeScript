import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IUserState } from '../actions/sessionActions';
import { ITimeState } from '../actions/timeActions';

export interface IStore {
  sessionState: IUserState;
  timeTrackerState: ITimeState;
  currentMonth: number;
  currentYear: number;
  sideBar: boolean;
  snackBar: string;
}

const loggerMiddleware = createLogger();

const configureStore = (initialState?: IStore) => {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk, loggerMiddleware)));
};

const store = configureStore();

export default store;
