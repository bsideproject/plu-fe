import styled from '@emotion/styled';
import { DatePickerYearItemProps } from '../types';
import { yearColsCount } from '../utils';

const Container = styled('div', {
  label: 'DatePickerYearItem',
})(() => ({
  width: `calc(100% / ${yearColsCount})`,
  padding: 10,
  cursor: 'pointer',
  '&:hover': {
    background: 'green',
    color: 'white',
  },
}));

const YearItemText = styled('p', {
  label: 'DatePickerYearItem-YearItemText',
})(() => ({
  textAlign: 'center',
}));

const DatePickerYearItem = (props: DatePickerYearItemProps) => {
  const { dObject, onChange } = props;

  return (
    <Container onClick={() => onChange(dObject.getDateObject, true)}>
      <YearItemText>{dObject.format('YYYY')}</YearItemText>
    </Container>
  );
};

export default DatePickerYearItem;
