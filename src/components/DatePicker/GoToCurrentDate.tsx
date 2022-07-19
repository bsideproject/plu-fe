import styled from '@emotion/styled';
import { memo } from 'react';
import { GoToCurrentDateProps } from './types';

const Container = styled('div', {
  label: 'GoToCurrentDate',
})(() => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '10px 0',
}));

const GoToCurrentText = styled('p', {
  label: 'GoToCurrentText',
})(() => ({}));

const GoToCurrentDate = (props: GoToCurrentDateProps) => {
  const { onClick } = props;

  return (
    <Container onClick={onClick}>
      <GoToCurrentText>Go To Today</GoToCurrentText>
    </Container>
  );
};

export default memo(GoToCurrentDate);
