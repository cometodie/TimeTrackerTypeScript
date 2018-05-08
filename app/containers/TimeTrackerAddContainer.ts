import { connect, Dispatch } from 'react-redux';
import { compose } from 'redux';

import { setTimeTrackerData, SetTime } from 'actions/timeActions';
import { setSnackBar, setLoading } from 'actions/utilities';
import { User } from 'firebase';
import { Store } from 'store/store';
import { IUtilActions } from 'actions/utilities';
import TimeTrackerAdd from 'components/timeTrackerAdd/timeTrackerAdd';
import Table from 'models/table';

const mapStateToProps = (state: Store) => {
  return {
    authUser: state.sessionState.authUser,
    timeStore: state.timeTrackerState.userTime
  };
};

interface DispatchFromProps {
  onSetData: (time: Table.Time[]) => void;
  setLoading: (state: boolean) => void;
  setSnackBar: (state: string) => void;
}


const mapDispatchToProps = (dispatch: Dispatch<SetTime | IUtilActions>): DispatchFromProps => {
  return {
    onSetData: (time: Table.Time[]) => dispatch(setTimeTrackerData(time)),
    setLoading: (state: boolean) => dispatch(setLoading(state)),
    setSnackBar: (state: string) => {
      dispatch(setSnackBar(state));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeTrackerAdd);
