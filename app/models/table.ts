import { User } from "firebase";

namespace Table {
  export interface ITableProps {
    authUser?: User;
    countOfDays?: number;
    currentMonth: number;
    currentYear?: number;
    timeStore?: ITime[];
    month?: IDay[];
    onSetMonth?(time: number): void;
    onSetData?(array: ITime[]): void;
  }

  export interface ITableState {
    month: IDay[];
    nameOfMonth: string;
    countOfDays?: number;
    rows?: number;
  }

  export interface IWeekProps {
    currentMonth: number;
    currentYear: number;
    days: IDay[];
    timeStore: ITime[];
  }

  export interface IWeekState {
    currentMonth?: number;
    currentYear?: number;
    days: IDay[];
  }

  export interface IDayProps {
    active: boolean;
    day: number;
    time: number;
  }

  export interface IDayState {
    time: number;
    isBig: boolean;
    isNormal: boolean;
    isDefault: boolean;
  }

  export interface ITime {
    id: string;
    date: Date;
    time: number;
  }

  export interface IDay {
    day: number;
    time: number;
    activeMount: boolean;
  }
}

export default Table;

//   export class LogTime {
//     constructor(id: string, date: string, time: number) {
//       this.id = id;
//       this.date = new Date(date);
//       this.time = time;
//     }
//     id: string;
//     date: Date;
//     time: number;
//   }
