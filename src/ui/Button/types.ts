import React from 'react';

interface ButtonProps extends React.ComponentProps<'button'> {
  width?: React.CSSProperties['width'];
  fullWidth?: boolean;
  variant?: 'active' | 'disabled';
}

export type { ButtonProps };
