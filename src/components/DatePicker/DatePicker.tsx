import { Padding } from '@/ui';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Button from '../Button';
import DatePickerCalendarView from './DatePickerCalendarView';
import DatePickerHeader from './DatePickerHeader';
import { DatePickerProps } from './types';

const Container = styled('div', {
  label: 'DatePicker',
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  borderBottom: '1px solid',
}));

const DatePicker = (props: DatePickerProps) => {
  const { date: value, onChange } = props;

  const [date, setDate] = useState(value);

  const onChangeDate = (date: Date) => setDate(date);

  useEffect(() => {
    setDate(value);
  }, [value]);

  return (
    <Container>
      <Padding>
        <DatePickerHeader date={date} />
        <DatePickerCalendarView date={date} onChange={onChangeDate} />
        <Button fullWidth onClick={() => onChange(date)}>
          확인
        </Button>
      </Padding>
    </Container>
  );
};

export default DatePicker;
