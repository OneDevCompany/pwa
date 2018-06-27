import * as React from 'react';
import classNames from 'classnames';
import { HTMLProps, SFC } from 'react';

type TableHeadProps = HTMLProps<HTMLDivElement>;

export const TableHead: SFC<TableHeadProps> = ({ children, className, ...otherProps }) => (
  <div
    className={classNames('odc-table__head', className)}
    {...otherProps}
  >
    {children}
  </div>
);
