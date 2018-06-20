import * as React from 'react';
import { SFC } from 'react';
import { TopAppBar as RmwcTopAppBar, TopAppBarProps } from 'rmwc/TopAppBar';

export const TopAppBar: SFC<TopAppBarProps> = ({ children, className, ...otherProps }) => {
  return (
    <RmwcTopAppBar
      className={`odc-top-app-bar ${className || ''}`}
      short
      {...otherProps as any}
    >
      {children}
    </RmwcTopAppBar>
  );
};
