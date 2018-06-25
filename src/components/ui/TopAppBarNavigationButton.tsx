import * as React from 'react';
import classnames from 'classnames';
import { HTMLProps, SFC } from 'react';
import { SquareButton } from 'components/ui';

export const TopAppBarNavigationButton: SFC<HTMLProps<HTMLDivElement>> = ({ className, ...otherProps }) => (
  <SquareButton
    className={classnames('odc-navigation-button', className)}
    ripplePrimary
    use="menu"
    {...otherProps}
  />
);
