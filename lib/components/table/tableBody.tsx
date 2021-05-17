import * as React from 'react'
import { HTMLProps, FC } from 'react'
import classNames from 'classnames'

type TableBodyProps = HTMLProps<HTMLDivElement>

export const TableBody: FC<TableBodyProps> = ({
  children,
  className,
  ...otherProps
}) => (
  <div className={classNames('odc-table-body', className)} {...otherProps}>
    {children}
  </div>
)
