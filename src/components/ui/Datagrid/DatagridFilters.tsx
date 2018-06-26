import * as React from 'react';
import { SFC } from 'react';
import { Drawer } from 'rmwc/Drawer';
import {
  Toolbar,
  ToolbarIcon,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
} from 'rmwc/Toolbar';

type DatagridFiltersProps = {
  onClose?: () => void;
};

export const DatagridFilters: SFC<DatagridFiltersProps> = ({ onClose }) => (
  <Drawer
    className="odc-datagrid__filters"
    open
    permanent
  >
    <Toolbar>
      <ToolbarRow>
        <ToolbarTitle>Filters</ToolbarTitle>
        <ToolbarSection alignEnd>
          <ToolbarIcon use="close" onClick={onClose} />
        </ToolbarSection>
      </ToolbarRow>
    </Toolbar>

    {/* {!!drawerContent && (
      <DrawerContent onClick={this.closeDrawer}>
        {drawerContent}
      </DrawerContent>
    )} */}
  </Drawer>
);

DatagridFilters.defaultProps = {
  onClose: () => null,
};
