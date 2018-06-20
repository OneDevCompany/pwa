import * as React from 'react';
import { HTMLProps, ReactNode, SFC } from 'react';
import { Icon } from 'rmwc/Icon';
import { Ripple } from 'rmwc/Ripple';

type SquareButtonProps = { use: ReactNode } & HTMLProps<HTMLDivElement>;

export const SquareButton: SFC<SquareButtonProps> = ({ className, use, ...otherProps }) => (
  <Ripple>
    <div className={`odc-square-button ${className}`} {...otherProps}>
      <Icon use={use} />
    </div>
  </Ripple>
);
