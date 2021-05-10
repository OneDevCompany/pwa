import * as React from 'react'
import classNames from 'classnames'
import { HTMLProps, FC } from 'react'
import { Icon as RmwcIcon } from '@rmwc/icon'

type IconProps = HTMLProps<HTMLElement> & {
  icon: string
}

export const Icon: FC<IconProps> = ({
  children,
  className,
  icon,
  ...otherProps
}) => (
  <RmwcIcon
    className={classNames('odc-icon', className)}
    icon={icon}
    {...otherProps}
  />
)
