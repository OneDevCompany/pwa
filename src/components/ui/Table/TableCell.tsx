import * as React from 'react';
import classNames from 'classnames';
import { Order } from 'components/ui';
import { HTMLProps, SFC } from 'react';
import { Icon } from 'rmwc/Icon';

// TODO: refactor. Maybe extract a TableCellHeader and TableCellBody?

type TableCellProps = {
  active?: boolean;
  head?: boolean;
  noSort?: boolean;
  order?: Order;
} & HTMLProps<HTMLDivElement>;

export const TableCell: SFC<TableCellProps> = ({
  active,
  children,
  className,
  head,
  noSort,
  order,
  style,
  width,
  onClick: handleClick,
  ...otherProps }) => (
    <div
      className={classNames('odc-table__cell', className)}
      style={{ flexBasis: `${width}px`, ...style }}
      {...otherProps}
    >
      {!head ? children : (
        <div
          className={classNames(
            'odc-table__content',
            {
              'odc-table__content--active': active,
              'odc-table__content--no-sort': !!noSort,
              'odc-table__content--sort-asc': order === 'asc',
              'odc-table__content--sort-desc': order === 'desc',
            },
          )}
          onClick={handleClick}
        >
          {!!order && <Icon className="odc-table__icon" use="arrow_upward" />}
          <span className="odc-table__text">{children}</span>
        </div>
      )}
    </div>
  );

TableCell.defaultProps = {
  active: false,
  head: false,
  noSort: false,
  order: null,
  width: 200,
  onClick: () => null,
};
