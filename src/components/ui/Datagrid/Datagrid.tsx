import * as React from 'react';
import { Component, ReactNode } from 'react';
import { DatagridAnimationWrapper } from './DatagridAnimationWrapper';
import { DatagridFilters } from './DatagridFilters';
import { DatagridPagination } from './DatagridPagination';
import { DatagridTable } from './DatagridTable';
import { DatagridTableWrapper } from './DatagridTableWrapper';
import { DatagridToolbar } from './DatagridToolbar';

type DatagridProps = {
  noFilters?: boolean;
  mainButton?: ReactNode;
};

type DatagridState = {
  filtersDrawerOpen: boolean;
};

export class Datagrid extends Component<DatagridProps, DatagridState> {
  static defaultProps: DatagridProps = {
    noFilters: false,
    mainButton: null,
  };

  constructor(props: any) {
    super(props);

    this.state = {
      filtersDrawerOpen: false,
    };
  }

  render() {
    const { mainButton, noFilters } = this.props;
    const { filtersDrawerOpen } = this.state;

    return (
      <div className="odc-datagrid">
        <DatagridToolbar
          mainButton={mainButton}
          noToggleFiltersButton={noFilters}
          onClickFilterButton={this.toggleFilters}
        />

        {!!noFilters ? this.renderTable() : (
          <DatagridAnimationWrapper open={filtersDrawerOpen}>
            {this.renderTable()}

            <DatagridFilters onClickCloseButton={this.toggleFilters} />
          </DatagridAnimationWrapper>
        )}

        <DatagridPagination />
      </div>
    );
  }

  private renderTable = () => (
    <DatagridTableWrapper>
      <DatagridTable />
    </DatagridTableWrapper>
  )

  private toggleFilters = () => this.setState({ filtersDrawerOpen: !this.state.filtersDrawerOpen });
}
