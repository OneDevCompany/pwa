import * as React from 'react';
import { HTMLProps, ReactNode, SFC } from 'react';
import { Icon } from 'rmwc/Icon';
import { Ripple, RippleProps } from 'rmwc/Ripple';

type SquareButtonProps = { use: ReactNode } & RippleProps & HTMLProps<HTMLDivElement>;

export const SquareButton: SFC<SquareButtonProps> = ({
  accent,
  className,
  disabled,
  primary,
  unbounded,
  use,
  ...otherProps }) => {

  const rippleProps = { accent, disabled, primary, unbounded };

  return (
    <Ripple {...rippleProps}>
      <div className={`odc-square-button ${className || ''}`} {...otherProps}>
        <Icon use={use} />
      </div>
    </Ripple>
  );
};
