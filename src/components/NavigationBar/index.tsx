import styled from '@emotion/styled';
import IconButton from '../IconButton';
import Typography from '../Typography';
import { NavigationBarProps } from './types';

const Container = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const NavigationBarTypography = styled(Typography)(() => ({
  flex: 1,
}));

const NavigationBar = (props: NavigationBarProps) => {
  const { startIcon, endIcon, onClickStartIcon = () => {}, onClickEndIcon = () => {}, title } = props;

  return (
    <Container>
      {startIcon && <IconButton onClick={onClickStartIcon}>{startIcon}</IconButton>}
      <NavigationBarTypography textAlign="center">{title}</NavigationBarTypography>
      {endIcon && <IconButton onClick={onClickEndIcon}>{endIcon}</IconButton>}
    </Container>
  );
};

export default NavigationBar;
