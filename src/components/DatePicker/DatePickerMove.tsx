import CustomDate from '@/utils/CustomDate/CustomDate';
import styled from '@emotion/styled';
import { DatePickerMoveProps, MOVE_MODE } from './types';

const Container = styled('div', {
  label: 'DatePickerMove',
})(() => ({
  display: 'flex',
  padding: 10,
}));

const MoveButton = styled('button', {
  label: 'DatePickerMove-MoveButton',
})(() => ({}));

const DateText = styled('p', {
  label: 'DatePickerMove-DateText',
})(() => ({
  textAlign: 'center',
}));

const DatePickerMove = (props: DatePickerMoveProps) => {
  const { date, onChange, mode, onClick: _onClick } = props;

  const dObject = new CustomDate(date);

  const onClick = () => _onClick(mode);

  const onClickPrev = () => {
    const newDate = dObject.subtract(1, mode).getDateObject;
    onChange(newDate);
  };

  const onClickAfter = () => {
    const newDate = dObject.add(1, mode).getDateObject;
    onChange(newDate);
  };

  return (
    <Container>
      <MoveButton onClick={onClickPrev}>왼</MoveButton>
      <DateText onClick={onClick}>{MOVE_MODE.year === mode ? dObject.format('YYYY') : dObject.format('MM')}</DateText>
      <MoveButton onClick={onClickAfter}>오</MoveButton>
    </Container>
  );
};

export default DatePickerMove;
