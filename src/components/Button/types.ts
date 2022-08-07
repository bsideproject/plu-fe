import React from 'react';

interface ButtonProps extends React.ComponentProps<'button'> {
  width?: React.CSSProperties['width'];
  children?: string;
  fullWidth?: boolean;
  variant?: 'active' | 'disabled' | 'outlined' | 'normal';
  startIcon?: React.ReactNode;
  onClickStartIcon?: () => void;
  endIcon?: React.ReactNode;
  onClickEndIcon?: () => void;
  bgColor?: React.CSSProperties['backgroundColor'];
}

export type { ButtonProps };
