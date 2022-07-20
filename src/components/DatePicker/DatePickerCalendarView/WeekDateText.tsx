import CustomDate from '@/utils/CustomDate/CustomDate';
import styled from '@emotion/styled';
import { DAYS } from '../utils';

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
      {Object.values(DAYS).map((day, index) => {
        const color = DAYS[day] === DAYS.SUN ? 'red' : DAYS[day] === DAYS.SAT ? 'blue' : undefined;
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
