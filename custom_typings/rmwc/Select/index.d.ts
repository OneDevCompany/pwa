import * as React from 'react';
import { SimpleTagProps, MDCFoundation } from '../Base';
import { SimpleTag, syncFoundationProp } from '../Base';
import { FloatingLabel } from '../FloatingLabel';
import { LineRipple } from '../LineRipple';

// export const SelectRoot = simpleTag({
//   displayName: 'SelectRoot',
//   classNames: props => [
//     'mdc-select',
//     {
//       'mdc-select--box': props.box
//     }
//   ],
//   consumeProps: ['box'],
//   defaultProps: {
//     role: 'listbox'
//   }
// });

// export const SelectSurface = simpleTag({
//   displayName: 'SelectSurface',
//   classNames: 'mdc-select__surface'
// });

// export const SelectSelectedText = simpleTag({
//   displayName: 'SelectSelectedText',
//   classNames: 'mdc-select__selected-text'
// });

// export const SelectBottomLine = simpleTag({
//   displayName: 'SelectBottomLine',
//   classNames: 'mdc-select__bottom-line'
// });

// export const SelectNativeControl = simpleTag({
//   displayName: 'SelectNativeControl',
//   tag: 'select',
//   classNames: 'mdc-select__native-control'
// });

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

export class Select extends MDCFoundation<SelectProps> {}

export default Select;
