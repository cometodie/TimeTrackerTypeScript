import withAuthorization from 'components/sessions/withAuthorization';

import { compose } from 'redux';
import { connect, Dispatch } from 'react-redux';
// import { compose } from 'recompose';
// import * as TimeAction from 'actions/timeActions';
import * as TimeAction from 'actions/timeActions';
// import test from 'app/actions/timeActions'
// import * as TimeAction from 'actions/time'
// import { setLoading } from 'actions/utilities';
import Home from 'components/home/Home';
import { User } from 'firebase';
import Table from 'models/table';
import { set, UserAction } from 'actions/sessionActions';
import { IStore } from 'store/store';

interface StateFromProps {
  authUser: User;
  timeStore: Table.ITime[];
  currentMonth: number;
  currentYear: number;
}

interface DispatchFromProps {
  onNextYear: () => void;
  onSetData: (time: Table.ITime[]) => void;
  setUser: (user: User) => void;
  onSetMonth: (month: number, dispatch: Dispatch) => void;
}

const mapStateToProps = (state: IStore): StateFromProps => ({
  authUser: state.sessionState.authUser,
  timeStore: state.timeTrackerState.userTime,
  currentMonth: state.currentMonth,
  currentYear: state.currentYear
});

const authCondition = (authUser: User): boolean => !!authUser;

export const mapDispatchToProps = (dispatch: Dispatch<TimeAction.TimeActions | UserAction>): DispatchFromProps => ({
  onNextYear: () => dispatch(TimeAction.nextYear()),
  onSetData: (time: Table.ITime[]) => dispatch(TimeAction.setTimeTrackerData(time)),
  setUser: (user: User) => dispatch(set(user)),
  onSetMonth: (month: number) => dispatch(TimeAction.setTimeMonth(month, dispatch))
  // setLoader: time => dispatch(setLoading(time)),
  // toggleLoading: status => {
  //   dispatch(setLoading(status));
  // }
});

export default compose(withAuthorization(authCondition), connect(mapStateToProps, mapDispatchToProps))(Home);
