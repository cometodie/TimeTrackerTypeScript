import * as constants from 'constants/utilities';

export interface SetSnackBar {
  type: constants.SET_SNACKBAR;
  payload: string;
}

export interface ToggleLoading {
  type: constants.TOGGLE_LOADING;
  payload: boolean;
}

export interface ToggleSideBar {
  type: constants.TOGGLE_SIDEBAR;
  payload: boolean;
}

export type IUtilActions = SetSnackBar | ToggleLoading | ToggleSideBar;

export const toggleSidebar = (status: boolean): ToggleSideBar => {
  return {
    type: constants.TOGGLE_SIDEBAR,
    payload: status
  };
};

export const setSnackBar = (status: string): SetSnackBar => {
  return {
    type: constants.SET_SNACKBAR,
    payload: status
  };
};

export const setLoading = (status: boolean): ToggleLoading => {
  return {
    type: constants.TOGGLE_LOADING,
    payload: status
  };
};
