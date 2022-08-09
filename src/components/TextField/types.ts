import React from 'react';

interface TextFieldProps extends React.ComponentProps<'textarea'> {
  className?: string;
  label?: string;
  error?: string;
  width?: React.CSSProperties['width'];
  fullWidth?: boolean;
  rows?: number;
  multiline?: boolean;
  textAlign?: React.CSSProperties['textAlign'];
}

export type { TextFieldProps };
