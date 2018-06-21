import * as React from 'react';
import { HTMLProps, ReactNode, SFC } from 'react';
import { Icon } from 'rmwc/Icon';
import { Ripple } from 'rmwc/Ripple';

type SquareButtonProps = {
  ripplePrimary?: boolean;
  use: ReactNode;
} & HTMLProps<HTMLDivElement>;

export const SquareButton: SFC<SquareButtonProps> = ({
  className,
  disabled,
  ripplePrimary,
  use,
  ...otherProps }) => {

  return (
    <Ripple primary={ripplePrimary}>
      <div className={`odc-square-button ${className || ''}`} {...otherProps}>
        <Icon use={use} />
      </div>
    </Ripple>
  );
};

SquareButton.defaultProps = {
  ripplePrimary: false,
};
