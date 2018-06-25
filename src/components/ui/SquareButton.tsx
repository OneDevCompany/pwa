import * as React from 'react';
import classNames from 'classnames';
import { HTMLProps, ReactNode, SFC } from 'react';
import { Icon } from 'rmwc/Icon';
import { Ripple } from 'rmwc/Ripple';

type SquareButtonProps = {
  noRipple?: boolean;
  primary?: boolean;
  ripplePrimary?: boolean;
  use: ReactNode;
} & HTMLProps<HTMLDivElement>;

export const SquareButton: SFC<SquareButtonProps> = ({
  className,
  disabled,
  noRipple,
  primary,
  ripplePrimary,
  use,
  ...otherProps }) => {

  const button = (
    <div
      className={classNames(
        'odc-square-button',
        { 'odc-square-button--primary': primary },
        className,
      )}
      {...otherProps}
    >
      <Icon use={use} />
    </div>
  );

  return !!noRipple ? button : (
    <Ripple disabled={noRipple} primary={ripplePrimary}>
      {button}
    </Ripple>
  );
};

SquareButton.defaultProps = {
  noRipple: false,
  primary: false,
  ripplePrimary: false,
};
