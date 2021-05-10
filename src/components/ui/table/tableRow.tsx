import * as React from 'react'
import classNames from 'classnames'
import { HTMLProps, FC } from 'react'

type TableRowProps = HTMLProps<HTMLDivElement>

export const TableRow: FC<TableRowProps> = ({
  children,
  className,
  ...otherProps
}) => (
  <div className={classNames('odc-row', className)} {...otherProps}>
    {children}
  </div>
)
