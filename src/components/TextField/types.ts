import React from 'react';

interface TextFieldProps extends React.ComponentProps<'input'> {
  label?: string;
  error?: string;
}

export type { TextFieldProps };
