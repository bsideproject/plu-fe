import { Flex, Padding } from '@/ui';
import CustomDate from '@/utils/CustomDate/CustomDate';
import styled from '@emotion/styled';
import { DAYS } from '../utils';

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
    <Flex>
      {Object.values(DAYS).map((day, index) => {
        const color = DAYS[day] === DAYS.SUN ? 'red' : DAYS[day] === DAYS.SAT ? 'blue' : undefined;
        return (
          <DateText key={index} color={color}>
            <Padding>{startOfWeek.add(day, 'day').format('dd')}</Padding>
          </DateText>
        );
      })}
    </Flex>
  );
};

export default WeekDateText;
