import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';
import DatePickerCalendarView from './DatePickerCalendarView';
import DatePickerHeader from './DatePickerHeader';
import DatePickerMonthView from './DatePickerMonthView';
import DatePickerMove from './DatePickerMove';
import DatePickerYearView from './DatePickerYearView';
import GoToCurrentDate from './GoToCurrentDate';
import { DatePickerProps, MOVE_MODE, ViewMode, VIEW_MODE } from './types';

const Container = styled('div', {
  label: 'DatePicker',
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  borderBottom: '1px solid',
}));

const DatePickerMover = styled('div', {
  label: 'DatePickerMover',
})(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const DatePicker = (props: DatePickerProps) => {
  const { date: value, onChange } = props;

  const [date, setDate] = useState(value);
  const [mode, setMode] = useState(VIEW_MODE.calendar);

  const onChangeDate = useCallback((newDate: Date, modeChange?: boolean) => {
    setDate(newDate);

    if (modeChange) setMode(VIEW_MODE.calendar);
  }, []);

  const onChangeMode = useCallback((newMode: ViewMode) => setMode(newMode), []);

  const onChangeCurrentDate = useCallback(() => setDate(new Date()), []);

  useEffect(() => {
    setDate(value);
  }, [value]);

  return (
    <Container>
      <DatePickerHeader date={date} />
      <DatePickerMover>
        <DatePickerMove date={date} onChange={onChangeDate} mode={MOVE_MODE.year} onClick={onChangeMode} />
        <DatePickerMove date={date} onChange={onChangeDate} mode={MOVE_MODE.month} onClick={onChangeMode} />
      </DatePickerMover>
      {mode === VIEW_MODE.calendar && <DatePickerCalendarView date={date} onChange={onChange} />}
      {mode === VIEW_MODE.year && <DatePickerYearView date={date} onChange={onChangeDate} />}
      {mode === VIEW_MODE.month && <DatePickerMonthView date={date} onChange={onChangeDate} />}
      <GoToCurrentDate onClick={onChangeCurrentDate} />
    </Container>
  );
};

export default DatePicker;
