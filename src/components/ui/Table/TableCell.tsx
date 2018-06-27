import * as React from 'react';
import classNames from 'classnames';
import { HTMLProps, SFC } from 'react';
import { Icon } from 'rmwc/Icon';

type TableCellProps = {
  active?: boolean;
  head?: boolean;
  sortable?: boolean | 'asc' | 'desc';
} & HTMLProps<HTMLDivElement>;

export const TableCell: SFC<TableCellProps> = ({
  active,
  children,
  className,
  head,
  sortable,
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
              'odc-table__content--sortable': !!sortable,
              'odc-table__content--sortable-asc': sortable === 'asc',
              'odc-table__content--sortable-desc': sortable === 'desc',
            },
          )}
        >
          {!!sortable && <Icon className="odc-table__icon" use="arrow_upward" />}
          <span className="odc-table__text">{children}</span>
        </div>
      )}
    </div>
  );

TableCell.defaultProps = {
  active: false,
  head: false,
  sortable: false,
  width: 200,
};
