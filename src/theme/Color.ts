// -------------------------------- ButtonColor
interface ButtonColor {
  active: { color: string; bgColor: string; border?: string };
  disabled: { color: string; bgColor: string; border?: string };
  outlined: { color: string; bgColor: string; border?: string };
  normal: { color: string; bgColor: string; border?: string };
}

const BUTTON_COLOR: ButtonColor = {
  active: { color: 'white', bgColor: '#19C885' },
  disabled: { color: '#E6E6E6', bgColor: '#999999' },
  outlined: { color: '#19C885', bgColor: 'white', border: '#19C885' },
  normal: { color: '#999999', bgColor: 'white', border: '#999999' },
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
