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
  onClickCloseButton?: () => void;
};

export const DatagridFilters: SFC<DatagridFiltersProps> = ({ onClickCloseButton }) => (
  <Drawer
    className="odc-datagrid__filters"
    open
    permanent
  >
    <Toolbar>
      <ToolbarRow>
        <ToolbarTitle>Filters</ToolbarTitle>
        <ToolbarSection alignEnd>
          <ToolbarIcon use="close" onClick={onClickCloseButton} />
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
  onClickCloseButton: () => null,
};
