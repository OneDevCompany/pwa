import { Component } from 'react';
import { SimpleTagProps, WithRippleProps } from './../Base';

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
