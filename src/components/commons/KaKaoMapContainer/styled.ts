import styled from '@emotion/styled';
import { Props } from './KaKaoMapContainer';

const Container = styled('div')((props: Props) => ({
  width: `${props.width}px`,
  height: `${props.height}px`,
}));

export { Container };
