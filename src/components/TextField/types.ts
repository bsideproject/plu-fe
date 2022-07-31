import React from 'react';

interface TextFieldProps extends React.ComponentProps<'input'> {
  label?: string;
  error?: boolean;
}

export type { TextFieldProps };
