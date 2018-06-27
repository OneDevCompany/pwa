import * as React from 'react';
import classNames from 'classnames';
import { HTMLProps, SFC } from 'react';

type TableBodyProps = HTMLProps<HTMLDivElement>;

export const TableBody: SFC<TableBodyProps> = ({ children, className, ...otherProps }) => (
  <div
    className={classNames('odc-table__body', className)}
    {...otherProps}
  >
    {children}
  </div>
);
