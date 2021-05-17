import * as React from 'react'
import { ReactNode, FC } from 'react'
import { ProgressBar } from 'components'
import { Toolbar, ToolbarIcon, ToolbarRow, ToolbarSection } from '@rmwc/toolbar'

// TODO: create serach input in Datagrid
// TODO: add headerRightElements and headerLeftElements

type DatagridHeaderProps = {
  showProgress?: boolean
  mainButton?: ReactNode
  noToggleFiltersButton?: boolean
  onClickFilterButton?: () => void
}

export const DatagridHeader: FC<DatagridHeaderProps> = ({
  showProgress,
  mainButton,
  noToggleFiltersButton,
  onClickFilterButton,
}) => (
  <Toolbar className="odc-header">
    <ToolbarRow>
      {mainButton}

      <ToolbarSection alignEnd>
        {!noToggleFiltersButton && (
          <ToolbarIcon use="filter_list" onClick={onClickFilterButton} />
        )}
      </ToolbarSection>
    </ToolbarRow>

    <ProgressBar hidden={!showProgress} />
  </Toolbar>
)

DatagridHeader.defaultProps = {
  showProgress: false,
  mainButton: null,
  noToggleFiltersButton: false,
  onClickFilterButton: () => null,
}
