import * as React from 'react'
import classNames from 'classnames'
import { HTMLProps, FC } from 'react'

type TableHeadProps = HTMLProps<HTMLDivElement>

export const TableHead: FC<TableHeadProps> = ({
  children,
  className,
  ...otherProps
}) => (
  <div className={classNames('odc-head', className)} {...otherProps}>
    {children}
  </div>
)
