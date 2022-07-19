import CustomDate from '@/utils/CustomDate/CustomDate';
import styled from '@emotion/styled';
import { DatePickerYearViewProps } from '../types';
import { generatorYears, yearItemCount } from '../utils';
import DatePickerYearItem from './DatePickerYearItem';

const Container = styled('div', {
  label: 'DatePickerYearView',
})(() => ({
  display: 'flex',
}));

const MoveButton = styled('button', {
  label: 'DatePickerYearView-MoveButton',
})(() => ({}));

const YearContainer = styled('div', {
  label: 'DatePickerYearView-YearContainer',
})(() => ({
  flex: '1',
  display: 'flex',
  flexWrap: 'wrap',
}));

const DatePickerYearView = (props: DatePickerYearViewProps) => {
  const { date, onChange } = props;

  const dObject = new CustomDate(date);

  const onClickPrev = () => {
    const newDate = dObject.subtract(yearItemCount, 'year').getDateObject;
    onChange(newDate);
  };

  const onClickAfter = () => {
    const newDate = dObject.add(yearItemCount, 'year').getDateObject;
    onChange(newDate);
  };

  return (
    <Container>
      <MoveButton onClick={onClickPrev}>왼</MoveButton>
      <YearContainer>
        {generatorYears(date).map((year) => {
          const newDObject = new CustomDate(date).setYear(year);
          return <DatePickerYearItem key={year} dObject={newDObject} onChange={onChange} />;
        })}
      </YearContainer>
      <MoveButton onClick={onClickAfter}>오</MoveButton>
    </Container>
  );
};

export default DatePickerYearView;
