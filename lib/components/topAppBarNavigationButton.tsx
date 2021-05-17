import * as React from 'react'
import { HTMLProps, FC } from 'react'
import classnames from 'classnames'
import { SquareButton } from '../'

type TopAppBarNavigationButtonProps = HTMLProps<HTMLDivElement>

export const TopAppBarNavigationButton: FC<TopAppBarNavigationButtonProps> = ({
  className,
  ...otherProps
}) => (
  <SquareButton
    className={classnames('odc-navigation-button', className)}
    onlyRightBorder
    ripplePrimary
    icon="menu"
    {...otherProps}
  />
)
