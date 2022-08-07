import { shouldForwardProp } from '@/utils/emotion';
import styled from '@emotion/styled';
import { useMemo } from 'react';
import Typography from '../Typography';
import { NavigationBottomProps } from './types';

const Container = styled('div', {
  shouldForwardProp: shouldForwardProp(['size']),
})<{ size: number }>(({ size }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${size}, 1fr)`,
}));

const Stack = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 60,
  cursor: 'pointer',
}));

const NavigationBottom = (props: NavigationBottomProps) => {
  const { data = [] } = props;

  const size = useMemo(() => data.length, [data.length]);

  return (
    <Container size={size}>
      {data.map((item, index) => {
        const { icon, text } = item;
        return (
          <Stack key={index}>
            {icon}
            <Typography>{text}</Typography>
          </Stack>
        );
      })}
    </Container>
  );
};

export default NavigationBottom;
