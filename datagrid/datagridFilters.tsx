import * as React from 'react'
import { FC } from 'react'
import { Drawer } from '@rmwc/drawer'
import {
  Toolbar,
  ToolbarIcon,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
} from '@rmwc/toolbar'

type DatagridFiltersProps = {
  onClickCloseButton?: () => void
}

export const DatagridFilters: FC<DatagridFiltersProps> = ({
  onClickCloseButton,
}) => (
  <Drawer className="odc-datagrid__filters" open permanent>
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
)

DatagridFilters.defaultProps = {
  onClickCloseButton: () => null,
}
