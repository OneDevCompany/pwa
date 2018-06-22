import * as React from 'react';
import { SimpleTagProps } from '../Base';

export type SelectProps = {
  /** The value for a controlled select. */
  value?: any,
  /** Options accepts flat arrays, value => label maps, and more. See examples for details. */
  options?: string[] | { [value: string]: string } | any[],
  /** A label for the form control. */
  label?: string,
  /** Placeholder text for the form control. Set to a blank string to create a non-floating placeholder label. */
  placeholder?: string,
  /** Disables the form control. */
  disabled?: boolean,
  /** Makes the Select have a visual box. */
  box?: boolean,
  /** Props for the root element. By default, additional props spread to the native select element.  */
  rootProps?: Object,
  /** A className for the root element. */
  className?: string
} & SimpleTagProps<HTMLDivElement>;

export class Select extends React.Component<SelectProps> { }

export default Select;
