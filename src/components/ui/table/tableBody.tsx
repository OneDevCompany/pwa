import * as React from 'react'
import classNames from 'classnames'
import { HTMLProps, FC } from 'react'

type TableBodyProps = HTMLProps<HTMLDivElement>

export const TableBody: FC<TableBodyProps> = ({
  children,
  className,
  ...otherProps
}) => (
  <div className={classNames('odc-body', className)} {...otherProps}>
    {children}
  </div>
)
