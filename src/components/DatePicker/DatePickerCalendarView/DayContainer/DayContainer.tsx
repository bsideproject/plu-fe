import CustomDate from '@/utils/CustomDate/CustomDate';
import { shouldForwardProp } from '@/utils/emotion';
import styled from '@emotion/styled';
import { DayContainerProps } from '../../types';
import { getDayRange } from '../../utils';

const Container = styled('div', {
  label: 'DayContainer',
})(() => ({
  display: 'flex',
  flexWrap: 'wrap',
}));

const DayItem = styled('div', {
  label: 'DayContainer-DayItem',
  shouldForwardProp: shouldForwardProp(['isSelected']),
})<{ color?: string; isSelected: boolean }>(({ color, isSelected }) => {
  return {
    width: `${100 / 7}%`,
    backgroundColor: isSelected ? '#a8a8e6' : undefined,
    cursor: 'pointer',
    color,
    padding: '14px 8px',
    '&:hover': {
      background: 'green',
      color: 'white !important',
    },
  };
});

const DayItemText = styled('p', {
  label: 'DayContainer-DayItemText',
})(() => ({
  textAlign: 'center',
}));

const DayContainer = (props: DayContainerProps) => {
  const { date, onChange } = props;

  const dayRange = getDayRange(date);
  const yyymmdd = new CustomDate(date).format('YYYYMMDD');

  return (
    <Container>
      {dayRange.map((day, index) => {
        const sunday = index % 7 === 0;
        const saturday = index % 7 === 6;
        const color = sunday ? 'red' : saturday ? 'blue' : undefined;
        const _yyyymmdd = new CustomDate(day).format('YYYYMMDD');

        return (
          <DayItem
            key={day.toDateString()}
            color={color}
            isSelected={yyymmdd === _yyyymmdd}
            onClick={() => {
              onChange(day);
            }}
          >
            <DayItemText>{new CustomDate(day).format('DD')}</DayItemText>
          </DayItem>
        );
      })}
    </Container>
  );
};

export default DayContainer;
