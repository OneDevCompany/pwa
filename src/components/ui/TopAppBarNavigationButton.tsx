import * as React from 'react';
import { HTMLProps, SFC } from 'react';
import { SquareButton } from 'components/ui';

export const TopAppBarNavigationButton: SFC<HTMLProps<HTMLDivElement>> = ({ className, ...otherProps }) => (
  <SquareButton
    className={`navigation-button ${className || ''}`}
    ripplePrimary
    use="menu"
    {...otherProps}
  />
);
