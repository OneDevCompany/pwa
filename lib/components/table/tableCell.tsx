import * as React from 'react'
import { HTMLProps, FC } from 'react'
import classNames from 'classnames'
import { Icon } from '../'

// TODO: refactor. Maybe extract a TableCellHeader and TableCellBody?

export type Order = 'asc' | 'desc'

type TableCellProps = {
  active?: boolean
  head?: boolean
  noSort?: boolean
  order?: Order
} & HTMLProps<HTMLDivElement>

export const TableCell: FC<TableCellProps> = ({
  active,
  children,
  className,
  head,
  noSort,
  order,
  style,
  width,
  onClick: handleClick,
  ...otherProps
}) => (
  <div
    className={classNames('odc-table-cell', className)}
    style={{ flexBasis: `${width}px`, ...style }}
    {...otherProps}
  >
    {!head ? (
      children
    ) : (
      <div
        className={classNames('content', {
          '-active': active,
          '-no-sort': !!noSort,
          '-sort-asc': order === 'asc',
          '-sort-desc': order === 'desc',
        })}
        onClick={handleClick}
      >
        {!!order && <Icon icon="arrow_upward" />}
        <span className="text">{children}</span>
      </div>
    )}
  </div>
)

TableCell.defaultProps = {
  active: false,
  head: false,
  noSort: false,
  width: 200,
  onClick: () => null,
}
