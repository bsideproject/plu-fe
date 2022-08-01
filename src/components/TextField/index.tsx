import { shouldForwardProp } from '@/utils/emotion';
import styled from '@emotion/styled';
import { useState } from 'react';
import Typography from '../Typography';
import { TextFieldProps } from './types';

const Container = styled('div')<{ width?: React.CSSProperties['width'] }>(({ width }) => ({
  position: 'relative',
  display: 'inline-flex',
  flexDirection: 'column',
  borderRadius: 10,
  width,
}));

const Label = styled('label', { shouldForwardProp: shouldForwardProp(['focus']) })<{ focus: boolean }>(({ focus }) => ({
  position: 'absolute',
  left: 16,
  fontSize: 12,
  transition: '.2s',
  pointerEvents: 'none',
  top: focus ? 10 : (60 - 12) / 2,
  color: '#79818F',
}));

const Input = styled('input', { shouldForwardProp: shouldForwardProp(['error', 'disabled']) })<{ error: boolean }>(
  ({ theme, disabled, error }) => ({
    width: '100%',
    height: 60,
    borderRadius: 10,
    fontSize: 14,
    padding: 16,
    paddingTop: 24,
    border: error ? `1px solid ${theme.color.textfield.error}` : `1px solid ${theme.color.textfield.normal}`,
    '&:focus': {
      border: disabled ? undefined : `1px solid ${theme.color.textfield.focus}`,
    },
    '&:active': {
      border: disabled ? undefined : `1px solid ${theme.color.textfield.active}`,
    },
    '&:invalid': {
      border: disabled ? undefined : `1px solid ${theme.color.textfield.error}`,
    },
  })
);

const ErrorMsg = styled(Typography)(({ theme }) => ({
  marginTop: 10,
  color: `${theme.color.textfield.error}`,
}));

const TextField = (props: TextFieldProps) => {
  const { label, value, onChange, error = false, disabled, width } = props;

  const [focus, setFocus] = useState(value ? true : false);

  return (
    <Container
      width={width}
      onFocus={(e) => {
        e.stopPropagation();
        setFocus(true);
      }}
      onBlur={(e) => {
        e.stopPropagation();
        setFocus(value ? true : false);
      }}
    >
      {label && <Label focus={focus}>{label}</Label>}
      <Input value={value} onChange={onChange} disabled={disabled} error={!!error} />
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </Container>
  );
};

export default TextField;
