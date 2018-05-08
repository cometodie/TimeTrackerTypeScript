import { Dispatch } from 'react-redux';

import * as constants from 'constants/timeTracker';
import { User } from 'firebase';
import Table from 'models/table';

export interface SetTime {
  type: typeof constants.TIME_SET;
  payload: Table.Time[];
}

export interface SetYear {
  type: typeof constants.SET_YEAR;
  payload: number;
}

export interface SetMonth {
  type: typeof constants.SET_MONTH;
  payload: number;
}

export interface NextYear {
  type: typeof constants.NEXT_YEAR;
}

export interface PrevYear {
  type: typeof constants.PREV_YEAR;
}

export interface TimeClear {
  type: typeof constants.TIME_CLEAR;
}

export interface TimeState {
  userTime: Table.Time[];
}

export type TimeActions = SetTime | SetMonth | NextYear | PrevYear | TimeClear | SetYear;

export const setMonth = (payload: number): SetMonth => {
  return {
    type: constants.SET_MONTH,
    payload: payload
  };
};

export const nextYear = (): NextYear => {
  return {
    type: constants.NEXT_YEAR
  };
};

export const prevYear = (): PrevYear => {
  return {
    type: constants.PREV_YEAR
  };
};

export const setTimeTrackerData = (payload: Table.Time[]): SetTime => {
  return {
    type: constants.TIME_SET,
    payload: payload
  };
};

export const setTimeMonth = (payload: number, dispatch: Dispatch): SetMonth => {
  if (payload > 12) {
    dispatch(nextYear());
    payload = 1;
  } else if (payload <= 0) {
    dispatch(prevYear());
    payload = 12;
  }
  return setMonth(payload);
};

export const setTimeYear = (payload: number): SetYear => {
  return {
    type: constants.SET_YEAR,
    payload: payload
  };
};

export const clearTimeStore = (): TimeClear => {
  return {
    type: constants.TIME_CLEAR
  };
};
