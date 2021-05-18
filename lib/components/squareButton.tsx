import * as React from 'react'
import { HTMLProps, FC } from 'react'
import classNames from 'classnames'
import { Ripple } from '@rmwc/ripple'
import { Icon } from '../'

type SquareButtonProps = {
  noRipple?: boolean
  onlyRightBorder?: boolean
  primary?: boolean
  ripplePrimary?: boolean
  icon: string
} & HTMLProps<HTMLDivElement>

export const SquareButton: FC<SquareButtonProps> = ({
  className,
  disabled,
  noRipple,
  onlyRightBorder,
  primary,
  ripplePrimary,
  icon,
  ...otherProps
}) => {
  const button = (
    <div
      className={classNames(
        'odc-square-button',
        { '-primary': primary },
        { '-only-right-border': onlyRightBorder },
        className,
      )}
      {...otherProps}
    >
      <Icon icon={icon} />
    </div>
  )

  return !!noRipple ? (
    button
  ) : (
    <Ripple disabled={noRipple} primary={ripplePrimary}>
      {button}
    </Ripple>
  )
}

SquareButton.defaultProps = {
  noRipple: false,
  primary: false,
  ripplePrimary: false,
}