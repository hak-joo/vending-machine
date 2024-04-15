export type ButtonShapes = 'rectangle' | 'circle';

export type Colors =
  | 'blue'
  | 'red'
  | 'gray'
  | 'purple'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'black'
  | 'white'
  | 'lightBlue'
  | 'lightOrenge';

export type ButtonTextAlign = 'center' | 'right' | 'left';

export interface CommandBtnType {
  bgColor?: Colors;
  textColor?: Colors;
  border?: Colors;
  shape?: ButtonShapes;
  textAlign?: ButtonTextAlign;
  additionalClass?: string;
  disabled?: boolean;
  type: 'submit' | 'button' | 'reset' | undefined;
  description: string;
}
