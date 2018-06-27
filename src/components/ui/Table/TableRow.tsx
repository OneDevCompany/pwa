import * as React from 'react';
import classNames from 'classnames';
import { HTMLProps, SFC } from 'react';

type TableRowProps = HTMLProps<HTMLDivElement>;

export const TableRow: SFC<TableRowProps> = ({ children, className, ...otherProps }) => (
  <div
    className={classNames('odc-table__row', className)}
    {...otherProps}
  >
    {children}
  </div>
);
