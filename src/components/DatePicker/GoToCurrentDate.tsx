import styled from '@emotion/styled';
import { memo } from 'react';
import { GoToCurrentDateProps } from './types';

const Container = styled('p', {
  label: 'GoToCurrentDate',
})(() => ({
  textAlign: 'center',
  padding: 10,
}));

const GoToCurrentDate = (props: GoToCurrentDateProps) => {
  const { onClick } = props;

  return <Container onClick={onClick}>Go To Today</Container>;
};

export default memo(GoToCurrentDate);
