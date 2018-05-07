import * as React from 'react';
import TimeTrackerTable from 'components/Table/TimeTrackerTable/TimeTrackerTable';
import * as dbApi from 'dbApi/TimeTrackerApi';
import * as routes from 'constants/routes';

import { Link } from 'react-router-dom';
import { RaisedButton } from 'material-ui';
import Table from 'models/table';
import { User } from 'firebase';

interface HomeProps {
  authUser: User;
  timeStore: Table.ITime[];
  currentMonth: number;
  currentYear: number;
  onNextYear: () => void;
  onSetData: (time: Table.ITime[]) => void;
  setUser: (user: User) => void;
}

class Home extends React.Component<HomeProps, {}> {
  constructor(props: HomeProps) {
    super(props);
  }

  componentWillMount() {
    this.props.onSetData(dbApi.getTimeDate(this.props.authUser.uid));
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
