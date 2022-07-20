import CustomDate from '@/utils/CustomDate/CustomDate';

const MOVE_MODE = {
  year: 'year',
  month: 'month',
} as const;

type MoveMode = typeof MOVE_MODE[keyof typeof MOVE_MODE];

const VIEW_MODE = {
  year: 'year',
  month: 'month',
  calendar: 'calendar',
};

type ViewMode = typeof VIEW_MODE[keyof typeof VIEW_MODE];

// --------------------------------------------- props
interface DatePickerProps {
  date: Date;
  onChange: (value: Date) => void;
}

interface DatePickerHeaderProps {
  date: Date;
}

interface DatePickerMoveProps {
  date: Date;
  onChange: (date: Date) => void;
  mode: MoveMode;
  onClick: (mode: ViewMode) => void;
}

interface DatePickerCalendarViewProps extends DatePickerProps {}

interface DayContainerProps extends DatePickerCalendarViewProps {}

interface DatePickerYearViewProps {
  date: Date;
  onChange: (newDate: Date, modeChabge?: boolean) => void;
}

interface DatePickerYearItemProps extends Pick<DatePickerYearViewProps, 'onChange'> {
  dObject: CustomDate;
}

interface DatePickerMonthViewProps extends DatePickerYearViewProps {}

interface GoToCurrentDateProps {
  onClick: () => void;
}

export { MOVE_MODE, VIEW_MODE };
export type {
  MoveMode,
  ViewMode,
  DatePickerProps,
  DatePickerHeaderProps,
  DatePickerMoveProps,
  DatePickerCalendarViewProps,
  DayContainerProps,
  DatePickerYearViewProps,
  DatePickerYearItemProps,
  DatePickerMonthViewProps,
  GoToCurrentDateProps,
};
