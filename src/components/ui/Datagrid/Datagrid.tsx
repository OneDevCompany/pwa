import * as React from 'react';
import { Component } from 'react';
import { DatagridAnimationWrapper } from './DatagridAnimationWrapper';
import { DatagridFilters } from './DatagridFilters';
import { DatagridPagination } from './DatagridPagination';
import { DatagridTable } from './DatagridTable';
import { DatagridToolbar } from './DatagridToolbar';
import { Scrollbars } from 'components/ui';

type DatagridProps = {
  noFilters?: boolean;
};

type DatagridState = {
  filtersDrawerOpen: boolean;
};

export class Datagrid extends Component<DatagridProps, DatagridState> {
  static defaultProps: DatagridProps = {
    noFilters: false,
  };

  constructor(props: any) {
    super(props);

    this.state = {
      filtersDrawerOpen: false,
    };
  }

  render() {
    const { noFilters } = this.props;
    const { filtersDrawerOpen } = this.state;

    return (
      <div className="odc-datagrid">
        <DatagridToolbar
          noToggleFiltersButton={noFilters}
          onClickFilterButton={this.toggleFilters}
        />

        {!!noFilters ? (
          <DatagridTable />
        ) : (
          <DatagridAnimationWrapper open={filtersDrawerOpen}>
            <Scrollbars className="odc-table-scrollbars">
              <div className="odc-table-wrapper">
                <DatagridTable />
              </div>
            </Scrollbars>

            <DatagridFilters onClickCloseButton={this.toggleFilters} />
          </DatagridAnimationWrapper>
        )}

        <DatagridPagination />
      </div>
    );
  }

  private toggleFilters = () => this.setState({ filtersDrawerOpen: !this.state.filtersDrawerOpen });
}
