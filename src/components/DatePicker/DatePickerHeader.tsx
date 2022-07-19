import CustomDate from '@/utils/CustomDate/CustomDate';
import styled from '@emotion/styled';
import { DatePickerHeaderProps } from './types';

const Container = styled('p', {
  label: 'DatePickerHeader',
})(() => ({
  textAlign: 'center',
  padding: 10,
}));

const DatePickerHeader = (props: DatePickerHeaderProps) => {
  const { date } = props;

  return <Container>{new CustomDate(date).format('YYYY/MM/DD ddd')}</Container>;
};

export default DatePickerHeader;
