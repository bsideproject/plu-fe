import React, { forwardRef } from 'react';
import { Container } from './styled';

export type Props = {
  width: React.CSSProperties['width'];
  height: React.CSSProperties['height'];
};

const KaKaoMapContainer = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <Container ref={ref} {...props} />;
});

export default KaKaoMapContainer;
