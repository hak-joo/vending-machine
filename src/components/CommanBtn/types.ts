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
  | 'white';

export type ButtonTextAlign = 'center' | 'right' | 'left';

export interface CommandBtnType {
  bgColor?: Colors;
  textColor?: Colors;
  border?: Colors;
  shape?: ButtonShapes;
  textAlign?: ButtonTextAlign;
  additionalClass?: string;
  disabled?: boolean;
}
