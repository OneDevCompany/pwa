import * as React from 'react';
import { SFC } from 'react';
import ReactCustomScrollbars from 'react-custom-scrollbars';
import { ScrollbarProps } from 'react-custom-scrollbars';

export const Scrollbars: SFC<ScrollbarProps> = ({ autoHide, children, universal, ...otherProps }) => (
  <ReactCustomScrollbars
    autoHide={autoHide}
    universal={universal}
    {...otherProps}
  >
    {children}
  </ReactCustomScrollbars>
);

Scrollbars.defaultProps = {
  autoHide: true,
  universal: true,
};
