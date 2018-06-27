import * as React from 'react';
import classNames from 'classnames';
import { HTMLProps, SFC } from 'react';

type TableProps = HTMLProps<HTMLDivElement>;

export const Table: SFC<TableProps> = ({ children, className, ...otherProps }) => (
  <div
    className={classNames('odc-table', className)}
    {...otherProps}
  >
    {children}
  </div>
);
