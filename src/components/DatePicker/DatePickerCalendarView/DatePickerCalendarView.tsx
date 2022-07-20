import styled from '@emotion/styled';
import { DatePickerCalendarViewProps } from '../types';
import DayContainer from './DayContainer';
import WeekDateText from './WeekDateText';

const Container = styled('div', {
  label: 'DatePickerCalendarView',
})(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const DatePickerCalendarView = (props: DatePickerCalendarViewProps) => {
  return (
    <Container>
      <WeekDateText />
      <DayContainer {...props} />
    </Container>
  );
};

export default DatePickerCalendarView;
