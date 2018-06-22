import { Component } from 'react';
import { SimpleTagProps, WithRippleProps } from './../Base';
import { Icon } from './../Icon';

/** An icon that goes inside of buttons. This is an instance of the Icon component. */
export class ButtonIcon extends Icon { }

type ButtonProps = {
  /** Make the Button dense. */
  dense?: boolean,
  /** Make the Button raised. */
  raised?: boolean,
  /** Make the button unelevated. */
  unelevated?: boolean,
  /** Make the button outlined. */
  outlined?: boolean,
} & SimpleTagProps<HTMLButtonElement>
  & WithRippleProps

export class Button extends Component<ButtonProps> { }
