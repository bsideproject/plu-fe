// -------------------------------- ButtonColor
interface ButtonColor {
  active: string;
  disabled: string;
}

const BUTTON_COLOR = {
  active: '#19C885',
  disabled: '#E6E6E6',
};

// -------------------------------- All Color
interface Color {
  button: ButtonColor;
}

const COLOR = {
  button: BUTTON_COLOR,
};

export { COLOR };
export type { Color };
