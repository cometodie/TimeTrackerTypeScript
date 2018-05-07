import * as constants from '../../constants/utilities';

export interface ISetSnackBar {
  type: constants.SET_SNACKBAR;
  payload: string;
}

export interface IToggleLoading {
  type: constants.TOGGLE_LOADING;
  payload: boolean;
}

export interface IToggleSideBar {
  type: constants.TOGGLE_SIDEBAR;
  payload: boolean;
}

export type IUtilActions = ISetSnackBar | IToggleLoading | IToggleSideBar;

export const toggleSidebar = (status: boolean): IToggleSideBar => {
  return {
    type: constants.TOGGLE_SIDEBAR,
    payload: status
  };
};

export const setSnackBar = (status: string): ISetSnackBar => {
  return {
    type: constants.SET_SNACKBAR,
    payload: status
  };
};

export const setLoading = (status: boolean): IToggleLoading => {
  return {
    type: constants.TOGGLE_LOADING,
    payload: status
  };
};
