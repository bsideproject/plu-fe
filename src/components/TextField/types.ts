import React from 'react';

interface TextFieldProps extends React.ComponentProps<'input'> {
  className?: string;
  label?: string;
  error?: string;
}

export type { TextFieldProps };
