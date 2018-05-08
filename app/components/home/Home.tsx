import * as React from 'react';
import TimeTrackerTable from 'components/Table/TimeTrackerTable/TimeTrackerTable';
import * as dbApi from 'dbApi/TimeTrackerApi';
import * as routes from 'constants/routes';

import { Link, RouteComponentProps } from 'react-router-dom';
import { RaisedButton } from 'material-ui';
import Table from 'models/table';
import { User } from 'firebase';

interface HomeProps extends RouteComponentProps<void> {
  authUser: User;
  timeStore: Table.Time[];
  currentMonth: number;
  currentYear: number;
  onNextYear: () => void;
  onSetData: (time: Table.Time[]) => void;
  setUser: (user: User) => void;
  onSetMonth: (month: number) => void;
  setLoader: (status: boolean) => void;
}

class Home extends React.Component<HomeProps, {}> {
  constructor(props: HomeProps) {
    super(props);
  }

  componentWillMount() {
    if (this.props.authUser) {
      this.props.onSetData(dbApi.getTimeDate(this.props.authUser.uid));
    } else {
      this.props.history.push(routes.SIGN_IN);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="page-wrapper">
          <TimeTrackerTable {...this.props} />
          <RaisedButton
            className="add-button"
            containerElement={<Link to={routes.ADD} className="add-time" />}
            label="Add time"
            primary={true}
          />
        </div>
      </div>
    );
  }
}

export default Home;
