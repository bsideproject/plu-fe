import styled from '@emotion/styled';
import { Props } from './KaKaoMapContainer';

const Container = styled('div')<Props>(({ width, height }) => ({
  width,
  height,
}));

export { Container };
