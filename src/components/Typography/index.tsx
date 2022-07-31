import { shouldForwardProp } from '@/utils/emotion';
import styled from '@emotion/styled';
import { memo } from 'react';
import { ContainerProps, TypographyProps } from './types';

const Container = styled('span', {
  shouldForwardProp: shouldForwardProp(['variant', 'weight', 'textAlign']),
})<ContainerProps>(({ theme, textAlign, variant = 'body1', weight = 'regular' }) => {
  const styles = theme.typography[variant];
  const fontWeight = theme.typography.fontWeight[weight];
  return {
    ...styles,
    textAlign,
    fontWeight: fontWeight,
    textShadow: variant === 'title1' && weight == 'bold' ? theme.typography.textShadow : undefined,
  };
});

const Typography = (props: TypographyProps) => {
  const { children, component, ...rest } = props;
  return (
    <Container as={component} {...rest}>
      {children}
    </Container>
  );
};

export default memo(Typography);
