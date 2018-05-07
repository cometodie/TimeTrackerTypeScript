import * as constants from 'constants/timeTracker';
import { Dispatch } from 'react-redux';
import { User } from 'firebase';
import Table from 'models/table';

export interface ISetTime {
  type: constants.TIME_SET;
  payload: Table.ITime[];
}

export interface ISetYear {
  type: constants.SET_YEAR;
  payload: number;
}

export interface ISetMonth {
  type: constants.SET_MONTH;
  payload: number;
}

export interface INextYear {
  type: constants.NEXT_YEAR;
}

export interface IPrevYear {
  type: constants.PREV_YEAR;
}

export interface ITimeClear {
  type: constants.TIME_CLEAR;
}

export interface ITimeState {
  userTime: Table.ITime[];
}

export type TimeActions = ISetTime | ISetMonth | INextYear | IPrevYear | ITimeClear | ISetYear;

export const setMonth = (payload: number): ISetMonth => {
  return {
    type: constants.SET_MONTH,
    payload: payload
  };
};

export const nextYear = (): INextYear => {
  return {
    type: constants.NEXT_YEAR
  };
};

export const prevYear = (): IPrevYear => {
  return {
    type: constants.PREV_YEAR
  };
};

export const setTimeTrackerData = (payload: Table.ITime[]): ISetTime => {
  return {
    type: constants.TIME_SET,
    payload: payload
  };
};

export const setTimeMonth = (payload: number, dispatch: Dispatch): ISetMonth => {
  if (payload > 12) {
    dispatch(nextYear());
    payload = 1;
  } else if (payload <= 0) {
    dispatch(prevYear());
    payload = 12;
  }
  return setMonth(payload);
};

export const setTimeYear = (payload: number): ISetYear => {
  return {
    type: constants.SET_YEAR,
    payload: payload
  };
};

export const clearTimeStore = (): ITimeClear => {
  return {
    type: constants.TIME_CLEAR
  };
};
