import * as React from 'react';

import TimeTrackerCell from 'components/table/TimeTrackerTable/timeTrackerCell/TimeTrackerCell';
import Table from 'models/table';

import './timeTrackerRow.scss';

class TimeTrackerRow extends React.Component<Table.WeekProps, Table.WeekState> {
  constructor(props: Table.WeekProps) {
    super(props);
    this.state = {
      days: []
    };
  }

  componentWillMount() {
    this.setState({
      days: this.props.days,
      currentMonth: this.props.currentMonth,
      currentYear: this.props.currentYear
    });
  }

  componentWillReceiveProps(nProps: Table.WeekProps) {
    this.setState({
      days: nProps.days,
      currentMonth: nProps.currentMonth,
      currentYear: nProps.currentYear
    });
  }

  render() {
    const row = this.props.days.map((el, i) => {
      return <TimeTrackerCell {...this.props} day={el.day} time={el.time} active={el.activeMount} key={i} />;
    });
    return (
      <div className="flex-row">
        <span>Hours: </span>
        <div className="flex-row">{row}</div>
      </div>
    );
  }
}

export default TimeTrackerRow;
