import { User } from 'firebase';

namespace Table {
  export interface TableProps {
    authUser?: User;
    countOfDays?: number;
    currentMonth: number;
    currentYear?: number;
    timeStore?: Time[];
    month?: Day[];
    onSetMonth?(time: number): void;
    onSetData?(array: Time[]): void;
  }

  export interface TableState {
    month: Day[];
    nameOfMonth: string;
    countOfDays?: number;
    rows?: number;
  }

  export interface WeekProps {
    currentMonth: number;
    currentYear: number;
    days: Day[];
    timeStore: Time[];
  }

  export interface WeekState {
    currentMonth?: number;
    currentYear?: number;
    days: Day[];
  }

  export interface DayProps {
    active: boolean;
    day: number;
    time: number;
  }

  export interface DayState {
    time: number;
    isBig: boolean;
    isNormal: boolean;
    isDefault: boolean;
  }

  export interface Time {
    id: string;
    date: string;
    time: number;
  }

  export interface Day {
    day: number;
    time: number;
    activeMount: boolean;
  }
}

export default Table;
