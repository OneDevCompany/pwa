import * as React from 'react'
import { FC } from 'react'
import ReactCustomScrollbars from 'react-custom-scrollbars-2'
import { ScrollbarProps } from 'react-custom-scrollbars-2'

export const Scrollbars: FC<ScrollbarProps> = ({
  autoHide,
  children,
  universal,
  ...otherProps
}) => (
  <ReactCustomScrollbars
    autoHide={autoHide}
    universal={universal}
    {...otherProps}
  >
    {children}
  </ReactCustomScrollbars>
)

Scrollbars.defaultProps = {
  autoHide: true,
  universal: true,
}
