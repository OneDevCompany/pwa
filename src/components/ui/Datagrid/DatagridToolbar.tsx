import * as React from 'react';
import { SFC } from 'react';
import { SquareButton } from 'components/ui';
import {
  Toolbar,
  ToolbarIcon,
  ToolbarRow,
  ToolbarSection,
} from 'rmwc/Toolbar';

type DatagridToolbarProps = {
  noToggleFiltersButton?: boolean;
  onClickFilterButton?: () => void;
};

export const DatagridToolbar: SFC<DatagridToolbarProps> = ({ noToggleFiltersButton, onClickFilterButton }) => (
  <Toolbar>
    <ToolbarRow>
      <SquareButton
        noRipple
        onlyRightBorder
        primary
        use="add"
      />

      <ToolbarSection alignEnd>
        {!noToggleFiltersButton && <ToolbarIcon use="filter_list" onClick={onClickFilterButton} />}
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>
);

DatagridToolbar.defaultProps = {
  noToggleFiltersButton: false,
  onClickFilterButton: () => null,
};
