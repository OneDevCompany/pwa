import * as React from 'react';
import { Component, ReactNode } from 'react';
import { DatagridAnimationWrapper } from './DatagridAnimationWrapper';
import { DatagridFilters } from './DatagridFilters';
import { DatagridPagination } from './DatagridPagination';
import { DatagridTable } from './DatagridTable';
import { DatagridTableWrapper } from './DatagridTableWrapper';
import { DatagridToolbar } from './DatagridToolbar';
import { DatagridTableData } from './models';

type DatagridProps = {
  data?: DatagridTableData;
  mainButton?: ReactNode;
  noFilters?: boolean;
  noHeader?: boolean;
  noPagination?: boolean;
};

type DatagridState = {
  filtersDrawerOpen: boolean;
};

export class Datagrid extends Component<DatagridProps, DatagridState> {
  static defaultProps: DatagridProps = {
    data: {
      items: [],
      uniqueKey: '',
    },
    mainButton: null,
    noFilters: false,
    noHeader: false,
    noPagination: false,
  };

  constructor(props: any) {
    super(props);

    this.state = {
      filtersDrawerOpen: false,
    };
  }

  render() {
    const {
      data,
      mainButton,
      noFilters,
      noHeader,
      noPagination,
    } = this.props;

    const { filtersDrawerOpen } = this.state;

    return (
      <div className="odc-datagrid">
        {!noHeader && (
          <DatagridToolbar
            mainButton={mainButton}
            noToggleFiltersButton={noFilters}
            onClickFilterButton={this.toggleFilters}
          />
        )}

        {!!noFilters ? this.renderTable(data) : (
          <DatagridAnimationWrapper open={filtersDrawerOpen}>
            {this.renderTable(data)}

            <DatagridFilters onClickCloseButton={this.toggleFilters} />
          </DatagridAnimationWrapper>
        )}

        {!noPagination && <DatagridPagination />}
      </div>
    );
  }

  private renderTable = (data: DatagridTableData) => (
    <DatagridTableWrapper>
      <DatagridTable {...data} />
    </DatagridTableWrapper>
  )

  private toggleFilters = () => this.setState({ filtersDrawerOpen: !this.state.filtersDrawerOpen });
}
