import * as React from 'react';
import { SFC } from 'react';
import { Toolbar, ToolbarRow } from 'rmwc/Toolbar';
import { SquareButton } from 'components/ui';

export const Datagrid: SFC<{}> = () => (
  <div className="odc-datagrid">
    <Toolbar>
      <ToolbarRow>
        <SquareButton primary use="add" />
      </ToolbarRow>
    </Toolbar>
  </div>
);
