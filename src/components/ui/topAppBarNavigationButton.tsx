import * as React from 'react'
import classnames from 'classnames'
import { HTMLProps, FC } from 'react'
import { SquareButton } from 'components/ui'

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
