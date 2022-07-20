import CustomDate from '@/utils/CustomDate/CustomDate';
import styled from '@emotion/styled';
import { DatePickerMonthViewProps } from '../types';
import { MONTHS } from '../utils';

const Container = styled('div', {
  label: 'DatePickerMonthView',
})(() => ({ display: 'flex', flexWrap: 'wrap' }));

const MonthItem = styled('div', {
  label: 'DatePickerMonthView-MonthItem',
})(() => ({
  width: '33.333%',
  padding: 10,
  cursor: 'pointer',
  '&:hover': {
    background: 'green',
    color: 'white',
  },
}));

const MonthItemText = styled('p', {
  label: 'DatePickerMonthView-MonthItemText',
})(() => ({
  textAlign: 'center',
}));

const DatePickerMonthView = (props: DatePickerMonthViewProps) => {
  const { date, onChange } = props;

  const dObject = new CustomDate(date);

  return (
    <Container>
      {Object.values(MONTHS).map((month) => {
        const mDObject = dObject.setMonth(month);
        return (
          <MonthItem
            key={month}
            onClick={() => {
              onChange(mDObject.getDateObject, true);
            }}
          >
            <MonthItemText>{mDObject.format('MMM')}</MonthItemText>
          </MonthItem>
        );
      })}
    </Container>
  );
};

export default DatePickerMonthView;
