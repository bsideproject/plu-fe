import { shouldForwardProp } from '@/utils/emotion';
import styled from '@emotion/styled';
import React from 'react';
import Typography from './Typography';

const Container = styled('div', {
  shouldForwardProp: shouldForwardProp(['color']),
})<{ color: React.CSSProperties['color'] }>(({ color }) => ({
  display: 'inline-block',
  padding: '4px 8px',
  border: `1px solid ${color}`,
  borderRadius: 16,
}));

interface Props {
  text: string;
  color?: React.CSSProperties['color'];
}

const Chip = (props: Props) => {
  const { text, color = '#19C885' } = props;

  return (
    <Container color={color}>
      <Typography color={color} component="p" textAlign="center">
        {text}
      </Typography>
    </Container>
  );
};

export default Chip;
