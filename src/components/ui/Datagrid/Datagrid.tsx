import * as React from 'react';
import { Component } from 'react';
import { DatagridAnimationWrapper } from './DatagridAnimationWrapper';
import { DatagridFilters } from './DatagridFilters';
import { DatagridPagination } from './DatagridPagination';
import { DatagridTable } from './DatagridTable';
import { DatagridToolbar } from './DatagridToolbar';

type DatagridState = {
  filtersDrawerOpen: boolean;
};

export class Datagrid extends Component<{}, DatagridState> {
  constructor(props: any) {
    super(props);

    this.state = {
      filtersDrawerOpen: false,
    };
  }

  render() {
    const { filtersDrawerOpen } = this.state;

    return (
      <div className="odc-datagrid">
        <DatagridToolbar onClickFilterButton={this.toggleFilters} />

        <DatagridAnimationWrapper open={filtersDrawerOpen}>
          <DatagridTable />
          <DatagridFilters onClickCloseButton={this.toggleFilters} />
        </DatagridAnimationWrapper>

        <DatagridPagination />
      </div>
    );
  }

  private toggleFilters = () => this.setState({ filtersDrawerOpen: !this.state.filtersDrawerOpen });
}
