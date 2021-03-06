import * as React from 'react';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';

import * as date from 'constants/date';
import { ArrowLeftIcon } from 'utilities/icons/ArrowLeftIcon';
import { ArrowRightIcon } from 'utilities/icons/ArrowRightIcon';
import { getMonthArray } from '../../../helpers/monthLogic';
import TimeTrackerRow from './timeTrackerRow/TimeTrackerRow';
import Table from 'models/table';

import './timeTrackerTable.scss';

class TimeTrackerTable extends React.Component<Table.TableProps, Table.TableState> {
  constructor(props: Table.TableProps) {
    super(props);
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.state = {
      month: [],
      nameOfMonth: ''
    };
  }

  componentWillReceiveProps(props: Table.TableProps) {
    const month: Table.Day[] = getMonthArray(props.currentYear, props.currentMonth, props.timeStore);
    this.setState(prevState => {
      return {
        month: month,
        countOfDays: month.length,
        rows: Math.floor(month.length / 7) + (month.length % 7 ? 1 : 0),
        nameOfMonth: date.monthNames[props.currentMonth - 1]
      };
    });
  }

  prevMonth() {
    this.props.onSetMonth(this.props.currentMonth - 1);
  }

  nextMonth() {
    this.props.onSetMonth(this.props.currentMonth + 1);
  }

  render() {
    const rows = [];
    for (let i = 0; i < this.state.rows; i++) {
      const start = i * 7,
        end = (i + 1) * 7 > this.state.countOfDays ? this.state.countOfDays : (i + 1) * 7;
      rows.push(
        <TimeTrackerRow
          key={i}
          timeStore={this.props.timeStore}
          currentMonth={this.props.currentMonth}
          currentYear={this.props.currentYear}
          days={this.state.month.slice(start, end)}
        />
      );
    }
    const nameOfDays = date.daysNames.map((el, i) => {
      return <div key={i}>{el}</div>;
    });
    return (
      <Card className="card min-height">
        <h2>{this.props.currentYear}</h2>
        <div className="header">
          <ArrowLeftIcon onClick={this.prevMonth} />
          <h2>{this.state.nameOfMonth}</h2>
          <ArrowRightIcon onClick={this.nextMonth} />
        </div>
        <div className="days-name">{nameOfDays}</div>
        <div>{rows}</div>
      </Card>
    );
  }
}

export default TimeTrackerTable;
