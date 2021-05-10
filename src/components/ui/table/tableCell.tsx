import * as React from 'react'
import classNames from 'classnames'
import { Icon, Order } from 'components/ui'
import { HTMLProps, FC } from 'react'

// TODO: refactor. Maybe extract a TableCellHeader and TableCellBody?

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
    className={classNames('odc-cell', className)}
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
  order: null,
  width: 200,
  onClick: () => null,
}
