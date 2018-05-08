import * as constants from 'constants/timeTracker';
import { TimeState, TimeActions, SetMonth } from 'actions/timeActions';

const INITIAL_TIME_STATE: TimeState = {
  userTime: [{ id: '0', date: '03-01-2018', time: 8 }]
};

export const timeTrackerReducer = (state: TimeState = INITIAL_TIME_STATE, action: TimeActions): TimeState => {
  switch (action.type) {
    case constants.TIME_SET: {
      return {
        ...state,
        userTime: action.payload
      };
    }
    case constants.TIME_CLEAR: {
      return {
        ...state,
        userTime: []
      };
    }
    default:
      return state;
  }
};

export default timeTrackerReducer;

const INITIAL_MONTH_STATE: number = new Date().getMonth() + 1;

export const monthReducer = (state: number = INITIAL_MONTH_STATE, action: SetMonth): number => {
  switch (action.type) {
    case constants.SET_MONTH: {
      let newState = action.payload;
      return newState;
    }
    default:
      return state;
  }
};

const INITIAL_YEAR_STATE: number = new Date().getFullYear();

export const yearReducer = (state: number = INITIAL_YEAR_STATE, action: TimeActions): number => {
  switch (action.type) {
    case constants.SET_YEAR: {
      let newState = action.payload;
      return newState;
    }
    case constants.NEXT_YEAR: {
      let newState = state + 1;
      return newState;
    }
    case constants.PREV_YEAR: {
      let newState = state - 1;
      return newState;
    }
    default:
      return state;
  }
};
