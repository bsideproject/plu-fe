import { shouldForwardProp } from '@/utils/emotion';
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

const Hidden = styled('div', {
  shouldForwardProp: shouldForwardProp(['hidden']),
})<{ hidden: boolean }>(({ hidden }) => ({
  visibility: hidden ? 'hidden' : undefined,
}));

const NavigationBar = (props: NavigationBarProps) => {
  const { startIcon, endIcon, onClickStartIcon = () => {}, onClickEndIcon = () => {}, title } = props;

  const icon = startIcon || endIcon;

  return (
    <Container>
      {icon && (
        <Hidden hidden={!startIcon}>
          <IconButton onClick={onClickStartIcon}>{startIcon ? startIcon : endIcon}</IconButton>
        </Hidden>
      )}
      <NavigationBarTypography textAlign="center">{title}</NavigationBarTypography>
      {icon && (
        <Hidden hidden={!endIcon}>
          <IconButton onClick={onClickEndIcon}>{endIcon ? endIcon : startIcon}</IconButton>
        </Hidden>
      )}
    </Container>
  );
};

export default NavigationBar;
