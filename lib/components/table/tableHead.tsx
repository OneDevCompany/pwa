import * as React from 'react'
import { HTMLProps, FC } from 'react'
import classNames from 'classnames'

type TableHeadProps = HTMLProps<HTMLDivElement>

export const TableHead: FC<TableHeadProps> = ({
  children,
  className,
  ...otherProps
}) => (
  <div className={classNames('odc-table-head', className)} {...otherProps}>
    {children}
  </div>
)
