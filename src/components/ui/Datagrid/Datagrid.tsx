import * as React from 'react';
import { Component, ReactNode } from 'react';
import { DatagridAnimationWrapper } from './DatagridAnimationWrapper';
import { DatagridFilters } from './DatagridFilters';
import { DatagridPagination } from './DatagridPagination';
import { DatagridTable } from './DatagridTable';
import { DatagridHeader } from './DatagridHeader';
import { Scrollbars, Query, TableColumn } from 'components/ui';
import { StringKeyValuePair } from 'components/ui/models';

// TODO: default column width via prop
// TODO: if a CardView will be implemented, tableColumns prop should not be required

type DatagridProps = {
  itemUniqueKey: string;
  items: StringKeyValuePair[];
  loading?: boolean;
  mainButton?: ReactNode;
  noFilters?: boolean;
  noHeader?: boolean;
  noPagination?: boolean;
  query?: Query;
  tableColumns: TableColumn[];
};

type DatagridState = {
  filtersDrawerOpen: boolean;
};

export class Datagrid extends Component<DatagridProps, DatagridState> {
  static defaultProps: Partial<DatagridProps> = {
    loading: false,
    mainButton: null,
    noFilters: false,
    noHeader: false,
    noPagination: false,
    query: {},
  };

  constructor(props: any) {
    super(props);

    this.state = {
      filtersDrawerOpen: false,
    };
  }

  render() {
    const {
      loading,
      mainButton,
      noFilters,
      noHeader,
      noPagination,
    } = this.props;

    const { filtersDrawerOpen } = this.state;

    return (
      <div className="odc-datagrid">
        {!noHeader && (
          <DatagridHeader
            showProgress={loading}
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

  private renderTable = ({ query, ...otherProps }: DatagridProps) => {
    const tableProps = { ...query, ...otherProps };

    return (
      <Scrollbars className="odc-datagrid__table-external-scrollbars">
        <DatagridTable {...tableProps} />
      </Scrollbars>
    );
  }

  private toggleFilters = () => this.setState({ filtersDrawerOpen: !this.state.filtersDrawerOpen });
}
