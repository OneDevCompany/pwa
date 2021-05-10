import * as React from 'react'
import { FC } from 'react'
import { TopAppBar as RmwcTopAppBar, TopAppBarProps } from '@rmwc/top-app-bar'

export const TopAppBar: FC<TopAppBarProps> = ({ children, ...otherProps }) => {
  return (
    <RmwcTopAppBar short {...(otherProps as any)}>
      {children}
    </RmwcTopAppBar>
  )
}
