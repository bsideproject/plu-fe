import CustomDate from '@/utils/CustomDate/CustomDate';
import styled from '@emotion/styled';
import { zeroTo6 } from '../utils';

const Container = styled('div', {
  label: 'WeekDateText',
})(() => ({
  display: 'flex',
  borderTop: '1px solid',
  borderBottom: '1px solid',
}));

const DateText = styled('p', {
  label: 'WeekDateText-DateText',
})<{ color?: string }>(({ color }) => ({
  flex: 1,
  color,
  textAlign: 'center',
  padding: 10,
}));

const WeekDateText = () => {
  const startOfWeek = new CustomDate().startOf('week');

  return (
    <Container>
      {zeroTo6.map((day, index) => {
        const sunday = index === 0;
        const saturday = index === 6;
        const color = sunday ? 'red' : saturday ? 'blue' : undefined;

        return (
          <DateText key={index} color={color}>
            {startOfWeek.add(day, 'day').format('dd')}
          </DateText>
        );
      })}
    </Container>
  );
};

export default WeekDateText;
