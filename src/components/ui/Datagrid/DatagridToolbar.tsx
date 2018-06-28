import * as React from 'react';
import { ReactNode, SFC } from 'react';
import {
  Toolbar,
  ToolbarIcon,
  ToolbarRow,
  ToolbarSection,
} from 'rmwc/Toolbar';

type DatagridToolbarProps = {
  mainButton?: ReactNode;
  noToggleFiltersButton?: boolean;
  onClickFilterButton?: () => void;
};

export const DatagridToolbar: SFC<DatagridToolbarProps> = ({
  mainButton,
  noToggleFiltersButton,
  onClickFilterButton,
}) => (
  <Toolbar>
    <ToolbarRow>
      {mainButton}

      <ToolbarSection alignEnd>
        {!noToggleFiltersButton && <ToolbarIcon use="filter_list" onClick={onClickFilterButton} />}
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>
);

DatagridToolbar.defaultProps = {
  mainButton: null,
  noToggleFiltersButton: false,
  onClickFilterButton: () => null,
};
