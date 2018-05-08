import { compose } from 'redux';
import { connect, Dispatch } from 'react-redux';

import { User } from 'firebase';
import { Store } from 'store/store';
import { setUser, UserAction } from 'actions/sessionActions';
import * as TimeAction from 'actions/timeActions';
import Home from 'components/home/Home';
import Table from 'models/table';
import withAuthorization from 'components/sessions/withAuthorization';

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
  onSetMonth: (month: number, dispatch: Dispatch) => void;
}

const mapStateToProps = (state: Store): StateFromProps => ({
  authUser: state.sessionState.authUser,
  timeStore: state.timeTrackerState.userTime,
  currentMonth: state.currentMonth,
  currentYear: state.currentYear
});

const authCondition = (authUser: User): boolean => !!authUser;

export const mapDispatchToProps = (dispatch: Dispatch<TimeAction.TimeActions | UserAction>): DispatchFromProps => ({
  onNextYear: () => dispatch(TimeAction.nextYear()),
  onSetData: (time: Table.Time[]) => dispatch(TimeAction.setTimeTrackerData(time)),
  setUser: (user: User) => dispatch(setUser(user)),
  onSetMonth: (month: number) => dispatch(TimeAction.setTimeMonth(month, dispatch))
  // setLoader: time => dispatch(setLoading(time)),
  // toggleLoading: status => {
  //   dispatch(setLoading(status));
  // }
});

export default compose(withAuthorization(authCondition), connect(mapStateToProps, mapDispatchToProps))(Home);
