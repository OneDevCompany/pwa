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
  onClickFilterButton?: () => void;
};

export const DatagridToolbar: SFC<DatagridToolbarProps> = ({ onClickFilterButton }) => (
  <Toolbar>
    <ToolbarRow>
      <SquareButton
        noRipple
        onlyRightBorder
        primary
        use="add"
      />

      <ToolbarSection alignEnd>
        <ToolbarIcon use="filter_list" onClick={onClickFilterButton} />
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>
);

DatagridToolbar.defaultProps = {
  onClickFilterButton: () => null,
};
