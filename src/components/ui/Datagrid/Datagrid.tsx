import * as React from 'react';
import { Component, ReactNode } from 'react';
import { DatagridAnimationWrapper } from './DatagridAnimationWrapper';
import { DatagridFilters } from './DatagridFilters';
import { DatagridPagination } from './DatagridPagination';
import { DatagridTable, DatagridTableProps } from './DatagridTable';
import { DatagridToolbar } from './DatagridToolbar';
import { Scrollbars } from 'components/ui';

// TODO: default column width via prop

type DatagridProps = {
  mainButton?: ReactNode;
  noFilters?: boolean;
  noHeader?: boolean;
  noPagination?: boolean;
} & DatagridTableProps;

type DatagridState = {
  filtersDrawerOpen: boolean;
};

export class Datagrid extends Component<DatagridProps, DatagridState> {
  static defaultProps: Partial<DatagridProps> = {
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

        {!!noFilters ? this.renderTable(this.props) : (
          <DatagridAnimationWrapper open={filtersDrawerOpen}>
            {this.renderTable(this.props)}

            <DatagridFilters onClickCloseButton={this.toggleFilters} />
          </DatagridAnimationWrapper>
        )}

        {!noPagination && <DatagridPagination />}
      </div>
    );
  }

  private renderTable = (props: DatagridProps) => (
    <Scrollbars className="odc-datagrid__table-external-scrollbars">
      <DatagridTable {...props} />
    </Scrollbars>
  );

  private toggleFilters = () => this.setState({ filtersDrawerOpen: !this.state.filtersDrawerOpen });
}
