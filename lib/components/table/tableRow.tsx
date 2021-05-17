import * as React from 'react'
import { HTMLProps, FC } from 'react'
import classNames from 'classnames'

type TableRowProps = HTMLProps<HTMLDivElement>

export const TableRow: FC<TableRowProps> = ({
  children,
  className,
  ...otherProps
}) => (
  <div className={classNames('odc-table-row', className)} {...otherProps}>
    {children}
  </div>
)
