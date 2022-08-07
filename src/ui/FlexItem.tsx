import { shouldForwardProp } from '@/utils/emotion';
import styled from '@emotion/styled';
import React, { memo } from 'react';

interface Props {
  grow?: React.CSSProperties['flexGrow'];
}

const FlexItem = styled('div', {
  shouldForwardProp: shouldForwardProp(['grow']),
})<Props>(({ grow }) => ({
  flexGrow: grow,
}));

export default memo(FlexItem);
