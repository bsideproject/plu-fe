import { shouldForwardProp } from '@/utils/emotion';
import styled from '@emotion/styled';

interface Props {
  noLRPadding?: boolean; // left, right
  noTBPadding?: boolean; // top, bottom
}

const Padding = styled('div', {
  shouldForwardProp: shouldForwardProp(['noLRPadding', 'noTBPadding']),
})<Props>(({ noLRPadding, noTBPadding }) => {
  if (noLRPadding && noTBPadding) {
    return { padding: 0 };
  }

  if (noLRPadding) return { padding: '8px 0' };
  if (noTBPadding) return { padding: '0 8px' };
  return { padding: 8 };
});

export default Padding;
