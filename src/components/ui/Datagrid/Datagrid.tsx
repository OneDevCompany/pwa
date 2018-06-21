import * as React from 'react';
import { SFC } from 'react';
import {
  Toolbar,
  ToolbarIcon,
  ToolbarRow,
  ToolbarSection,
} from 'rmwc/Toolbar';
import { SquareButton } from 'components/ui';

export const Datagrid: SFC<{}> = () => (
  <div className="odc-datagrid">
    <Toolbar>
      <ToolbarRow>
        <SquareButton
          noRipple
          primary
          use="add"
        />

        <ToolbarSection alignEnd>
          <ToolbarIcon use="filter_list" />
        </ToolbarSection>
      </ToolbarRow>
    </Toolbar>
  </div>
);
