import TimeTrackerAdd from '../components/timeTrackerAdd/timeTrackerAdd';
import withAuthorization from '../components/sessions/withAuthorization';

import { connect, Dispatch } from 'react-redux';
import { compose } from 'redux';
import { setTimeTrackerData, TimeActions } from '../actions/timeActions';
import { setSnackBar, setLoading } from '../actions/utilities';
import { User } from 'firebase';
import { IStore } from '../store/store';
import { IUtilActions } from '../actions/utilities';
import Table from '../models/table';

const mapStateToProps = (state: IStore) => {
  return {
    authUser: state.sessionState.authUser,
    timeStore: state.timeTrackerState.userTime
  };
};

const authCondition = (authUser: User) => !!authUser;

const mapDispatchToProps = (dispatch: Dispatch<TimeActions | IUtilActions>) => {
  return {
    onSetData: (time: Table.ITime[]) => dispatch(setTimeTrackerData(time)),
    setLoading: (state: boolean) => dispatch(setLoading(state)),
    setSnackBar: (state: string) => {
      dispatch(setSnackBar(state));
    },
    toggleLoading: (status: boolean) => {
      dispatch(setLoading(status));
    }
  };
};

export default compose(withAuthorization(authCondition), connect(mapStateToProps, mapDispatchToProps))(TimeTrackerAdd);
