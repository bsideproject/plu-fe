import { shouldForwardProp } from '@/utils/emotion';
import styled from '@emotion/styled';
import React, { memo } from 'react';

interface Props {
  grow?: React.CSSProperties['flexGrow'];
  width?: React.CSSProperties['width'];
}

const FlexItem = styled('div', {
  shouldForwardProp: shouldForwardProp(['grow', 'width']),
})<Props>(({ grow, width }) => ({
  flexGrow: grow,
  width,
}));

export default memo(FlexItem);
