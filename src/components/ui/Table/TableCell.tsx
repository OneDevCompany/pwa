import * as React from 'react';
import classNames from 'classnames';
import { HTMLProps, SFC } from 'react';
import { Icon } from 'rmwc/Icon';

// TODO: refactor. Maybe create a TableCellHeader and TableCellBody?

type TableCellProps = {
  active?: boolean;
  head?: boolean;
  noSort?: boolean;
  sortOrder?: 'asc' | 'desc';
} & HTMLProps<HTMLDivElement>;

export const TableCell: SFC<TableCellProps> = ({
  active,
  children,
  className,
  head,
  noSort,
  sortOrder,
  style,
  width,
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
              'odc-table__content--sort-asc': sortOrder === 'asc',
              'odc-table__content--sort-desc': sortOrder === 'desc',
            },
          )}
        >
          {!!sortOrder && <Icon className="odc-table__icon" use="arrow_upward" />}
          <span className="odc-table__text">{children}</span>
        </div>
      )}
    </div>
  );

TableCell.defaultProps = {
  active: false,
  head: false,
  noSort: false,
  sortOrder: null,
  width: 200,
};
