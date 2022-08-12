import styled from '@emotion/styled';
import React from 'react';

interface Props {
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  fullWidth?: boolean;
  fullHeight?: boolean;
}

const Paper = styled('div')<Props>(({ width, height, fullWidth, fullHeight }) => ({
  width: fullWidth ? '100%' : width,
  height: fullHeight ? '100%' : height,
  backgroundColor: '#fff',
  boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.15)',
  borderRadius: 10,
}));

export default Paper;
