import styled from '@emotion/styled';
import { ButtonProps } from './types';

const Container = styled('button')<ButtonProps>(
  ({ theme, disabled, variant: _variant = 'active', fullWidth, width }) => {
    const variant = disabled ? 'disabled' : _variant;
    return {
      width: fullWidth ? '100%' : width ? width : undefined,
      padding: '12px 0',
      backgroundColor: theme.color.button[variant],
      borderRadius: 10,
    };
  }
);

const Button = (props: ButtonProps) => {
  const { type = 'button', children, ...rest } = props;
  return (
    <Container type={type} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
