import * as React from 'react';
import { ReactNode, SFC } from 'react';
import { ProgressBar } from 'components/ui';
import {
  Toolbar,
  ToolbarIcon,
  ToolbarRow,
  ToolbarSection,
} from 'rmwc/Toolbar';

// TODO: create serach input in Datagrid
// TODO: add headerRightElements and headerLeftElements

type DatagridToolbarProps = {
  showProgress?: boolean;
  mainButton?: ReactNode;
  noToggleFiltersButton?: boolean;
  onClickFilterButton?: () => void;
};

export const DatagridToolbar: SFC<DatagridToolbarProps> = ({
  showProgress,
  mainButton,
  noToggleFiltersButton,
  onClickFilterButton,
}) => (
  <Toolbar className="odc-header">
    <ToolbarRow>
      {mainButton}

      <ToolbarSection alignEnd>
        {!noToggleFiltersButton && <ToolbarIcon use="filter_list" onClick={onClickFilterButton} />}
      </ToolbarSection>
    </ToolbarRow>

    <ProgressBar hidden={!showProgress} />
  </Toolbar>
);

DatagridToolbar.defaultProps = {
  showProgress: false,
  mainButton: null,
  noToggleFiltersButton: false,
  onClickFilterButton: () => null,
};
