import { MDCFoundation } from '../Base';

export type RippleProps = {
  /** Makes the ripple unbounded */
  unbounded?: boolean,
  /** Makes the ripple primary */
  primary?: boolean,
  /** Makes the ripple an accent color*/
  accent?: boolean,
  /** makes the ripple disabled */
  disabled?: boolean
}

export class Ripple extends MDCFoundation<RippleProps> { }

export default Ripple;
