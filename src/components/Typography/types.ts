import React from 'react';

type Variant = 'title1' | 'title2' | 'title3' | 'headline' | 'subheadline1' | 'body1' | 'caption';

type Component = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'caption' | 'button';

type FontSize = 12 | 14 | 16 | 20 | 24 | 28 | 32;

type FontWeightKey = 'regular' | 'semibold' | 'bold';
type FontWeight = 400 | 600 | 700;
type FontWeightObject = {
  [key in FontWeightKey]: FontWeight;
};

const FONT_WEIGHT: FontWeightObject = {
  regular: 400,
  semibold: 600,
  bold: 700,
} as const;

interface Font {
  fontSize: FontSize;
}

type Fonts = {
  [key in Variant]: Font;
};

interface Typography extends Fonts {
  htmlFontSize: number;
  fontWeight: FontWeightObject;
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)';
}

const TYPOGRAPHY: Typography = {
  htmlFontSize: 16,
  title1: {
    fontSize: 32,
  },
  title2: {
    fontSize: 28,
  },
  title3: {
    fontSize: 24,
  },
  headline: {
    fontSize: 20,
  },
  subheadline1: {
    fontSize: 16,
  },
  body1: {
    fontSize: 14,
  },
  caption: {
    fontSize: 12,
  },
  fontWeight: FONT_WEIGHT,
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
};

interface ContainerProps {
  variant?: Variant;
  weight?: FontWeightKey;
  textAlign?: React.CSSProperties['textAlign'];
  fullWidth?: boolean;
  width?: React.CSSProperties['width'];
  color?: React.CSSProperties['color'];
}

interface TypographyProps extends ContainerProps {
  component?: Component;
  children: React.ReactNode;
}

export { TYPOGRAPHY };
export type { Typography, Variant, FontWeight, FontWeightKey, Component, ContainerProps, TypographyProps };
