import { compose } from 'redux';
import { connect, Dispatch } from 'react-redux';

import { User } from 'firebase';
import { Store } from 'store/store';
import { setUser, SetUser } from 'actions/sessionActions';
import * as TimeAction from 'actions/timeActions';
import Home from 'components/home/Home';
import Table from 'models/table';
import { setLoading, ToggleLoading } from 'actions/utilities';

interface StateFromProps {
  authUser: User;
  timeStore: Table.Time[];
  currentMonth: number;
  currentYear: number;
}

interface DispatchFromProps {
  onNextYear: () => void;
  onSetData: (time: Table.Time[]) => void;
  setUser: (user: User) => void;
  onSetMonth: (month: number) => void;
  setLoader: (status: boolean) => void;
}

const mapStateToProps = (state: Store): StateFromProps => ({
  authUser: state.sessionState.authUser,
  timeStore: state.timeTrackerState.userTime,
  currentMonth: state.currentMonth,
  currentYear: state.currentYear
});

export const mapDispatchToProps = (dispatch: 
  Dispatch<TimeAction.TimeActions | SetUser | ToggleLoading>): DispatchFromProps => 
  ({
  onNextYear: () => dispatch(TimeAction.nextYear()),
  onSetData: (time: Table.Time[]) => dispatch(TimeAction.setTimeTrackerData(time)),
  onSetMonth: (month: number) => dispatch(TimeAction.setTimeMonth(month, dispatch)),
  setUser: (user: User) => dispatch(setUser(user)),
  setLoader: (status: boolean) => dispatch(setLoading(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
