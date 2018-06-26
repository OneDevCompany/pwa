import * as React from 'react';
import { SFC } from 'react';
import { Toolbar, ToolbarIcon, ToolbarRow, ToolbarSection } from 'rmwc/Toolbar';
import { Typography } from 'rmwc/Typography';
import { Select } from 'components/ui';

export const DatagridPagination: SFC<{}> = () => (
  <Toolbar className="odc-pagination">
    <ToolbarRow>
      <ToolbarSection alignEnd>
        <div className="odc-pagination__rows">
          <Typography use="caption">Rows per page:</Typography>
          <Select options={['5', '10', '25']} />
        </div>

        <div className="odc-pagination__counter">
          <Typography className="odc-pagination__from" use="caption">1</Typography>
          <Typography use="caption">{' - '}</Typography>
          <Typography className="odc-pagination__to" use="caption">15</Typography>
          <Typography use="caption">{' of '}</Typography>
          <Typography className="odc-pagination__total" use="caption">25</Typography>
        </div>

        <div className="odc-pagination__actions">
          <ToolbarIcon use="chevron_left" />
          <ToolbarIcon use="chevron_right" />
        </div>
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>
);
