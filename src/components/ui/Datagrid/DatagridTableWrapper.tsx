import * as React from 'react';
import { SFC } from 'react';
import { Scrollbars } from 'components/ui';

export const DatagridTableWrapper: SFC<{}> = ({ children }) =>
(
  <Scrollbars className="odc-datagrid__table-external-scrollbars">
    {children}
  </Scrollbars>
);
