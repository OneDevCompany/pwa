import * as React from 'react';
import { SFC } from 'react';
import { TopAppBar as RmwcTopAppBar, TopAppBarProps } from 'rmwc/TopAppBar';

export const TopAppBar: SFC<TopAppBarProps> = ({ children, ...otherProps }) => {
  return (
    <RmwcTopAppBar
      short
      {...otherProps as any}
    >
      {children}
    </RmwcTopAppBar>
  );
};
