// -------------------------------- ButtonColor
interface ButtonColor {
  active: string;
  disabled: string;
}

const BUTTON_COLOR: ButtonColor = {
  active: '#19C885',
  disabled: '#E6E6E6',
};

// -------------------------------- TextFieldColor
interface TextFieldColor {
  focus: string;
  active: string;
  normal: string;
  error: string;
}

const TEXTFIELD_COLOR: TextFieldColor = {
  focus: '#19C885',
  active: '#19C885',
  normal: '#CCCCCC',
  error: '#F1604C',
};

// -------------------------------- All Color
interface Color {
  button: ButtonColor;
  textfield: TextFieldColor;
}

const COLOR = {
  button: BUTTON_COLOR,
  textfield: TEXTFIELD_COLOR,
};

export { COLOR };
export type { Color };
