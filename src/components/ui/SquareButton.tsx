import * as React from 'react';
import classNames from 'classnames';
import { HTMLProps, ReactNode, SFC } from 'react';
import { Icon } from 'rmwc/Icon';
import { Ripple } from 'rmwc/Ripple';

type SquareButtonProps = {
  primary?: boolean;
  ripplePrimary?: boolean;
  use: ReactNode;
} & HTMLProps<HTMLDivElement>;

export const SquareButton: SFC<SquareButtonProps> = ({
  className,
  disabled,
  primary,
  ripplePrimary,
  use,
  ...otherProps }) => {

  return (
    <Ripple primary={ripplePrimary}>
      <div
        className={classNames(
          'odc-square-button',
          { 'odc-square-button__primary': primary },
          className,
        )}
        {...otherProps}
      >
        <Icon use={use} />
      </div>
    </Ripple>
  );
};

SquareButton.defaultProps = {
  primary: false,
  ripplePrimary: false,
};
