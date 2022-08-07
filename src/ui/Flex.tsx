import { shouldForwardProp } from '@/utils/emotion';
import styled from '@emotion/styled';
import React, { memo } from 'react';

interface Props {
  direction?: React.CSSProperties['flexDirection'];
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
  width?: React.CSSProperties['width'];
  fullWidth?: boolean;
  height?: React.CSSProperties['height'];
  fullHeight?: boolean;
  gap?: React.CSSProperties['gap'];
  padding?: React.CSSProperties['padding'];
  label?: string;
}

const Flex = styled('div', {
  shouldForwardProp: shouldForwardProp([
    'direction',
    'justifyContent',
    'alignItems',
    'width',
    'fullWidth',
    'height',
    'fullHeight',
    'gap',
    'padding',
  ]),
})<Props>(({ direction, gap, justifyContent, alignItems, width, fullWidth, height, fullHeight, padding }) => ({
  display: 'flex',
  flexDirection: direction,
  justifyContent: justifyContent,
  alignItems: alignItems,
  width: fullWidth ? '100%' : width,
  height: fullHeight ? '100%' : height,
  gap,
  padding,
}));

export default memo(Flex);
