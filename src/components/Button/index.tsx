import styled from '@emotion/styled';
import IconButton from '../IconButton';
import Typography from '../Typography';
import { ButtonProps } from './types';

const Container = styled('button')<Omit<ButtonProps, 'children'>>(
  ({ theme, disabled, variant: _variant = 'active', fullWidth, width, bgColor: _bgColor }) => {
    const variant = disabled ? 'disabled' : _variant;

    const { color, bgColor, border } = theme.color.button[variant];

    return {
      display: 'inline-flex',
      position: 'relative',
      alignItems: 'center',
      width: fullWidth ? '100%' : width ? width : undefined,
      padding: '12px 0',
      borderRadius: 10,
      color: color,
      backgroundColor: _bgColor ? _bgColor : bgColor,
      border: border ? `1px solid ${border}` : undefined,
    };
  }
);

const ButtonIconButton = styled(IconButton)<{ direction: 'left' | 'right' }>(({ direction }) => ({
  position: 'absolute',
  left: direction === 'left' ? 16 : undefined,
  right: direction === 'right' ? 16 : undefined,
}));

const Button = (props: ButtonProps) => {
  const {
    type = 'button',
    startIcon,
    onClickStartIcon = () => {},
    endIcon,
    onClickEndIcon = () => {},
    children,
    color,
    ...rest
  } = props;
  return (
    <Container type={type} {...rest}>
      {startIcon && (
        <ButtonIconButton direction="left" onClick={onClickStartIcon}>
          {startIcon}
        </ButtonIconButton>
      )}
      <Typography color={color} component="p" fullWidth textAlign="center">
        {children}
      </Typography>
      {endIcon && (
        <ButtonIconButton direction="right" onClick={onClickEndIcon}>
          {endIcon}
        </ButtonIconButton>
      )}
    </Container>
  );
};

export default Button;
