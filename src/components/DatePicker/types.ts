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
  value?: Date;
  onChange?: (value: Date) => void;
}

interface DatePickerHeaderProps {
  date: Date;
}

interface DatePickerMoveProps {
  date: Date;
  onChange: (value: Date) => void;
  mode: MoveMode;
  onClick: (value: ViewMode) => void;
}

interface DatePickerCalendarViewProps {
  date: Date;
  onChange: (value: Date) => void;
}

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
  GoToCurrentDateProps,
};
