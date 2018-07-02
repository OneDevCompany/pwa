import * as React from 'react';
import { SFC } from 'react';
import {
  Scrollbars,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from 'components/ui';
import { DatagridTableColumn } from './models';
import { StringKeyValuePair } from '../models';
import { zipWith } from '../utils';

// TODO: deal with empty data
// FIXME: last column is partially hidden when mobile size

export type DatagridTableProps = {
  items?: StringKeyValuePair[];
  itemUniqueKey?: string;
  tableColumns?: DatagridTableColumn[];
};

export const DatagridTable: SFC<DatagridTableProps> = (props) => (
  <Table>
    <TableHead>
      <TableRow>{renderHeaders(props)}</TableRow>
    </TableHead>

    <Scrollbars
      className="odc-table__body-scrollbars"
      style={getScrollbarStyle(props)}
    >
      <TableBody>
        {renderRows(props)}
      </TableBody>
    </Scrollbars>
  </Table>
);

DatagridTable.defaultProps = {
  items: [],
  itemUniqueKey: '',
  tableColumns: [],
};

function renderHeaders({ tableColumns }: DatagridTableProps) {
  return tableColumns.map(({ header, flexBasis }) => (
    <TableCell
      key={header}
      head
      style={getCellWidth(flexBasis)}
    >
      {header}
    </TableCell>
  ));
}

// TODO: refactor
function renderRows({ items, itemUniqueKey, tableColumns }: DatagridTableProps) {
  const itemKeys = Object.keys(items[0]);
  const toKeyAndFlexBasisPair = (key: string, column: DatagridTableColumn) => ({ [key]: column.flexBasis });
  const columnsProjection = zipWith(toKeyAndFlexBasisPair, itemKeys, tableColumns)
    .reduce((accu, curr) => ({ ...accu, ...curr }), {});

  return items.map(item => {
    const cells = Object
      .keys(item)
      .map(key => (
        <TableCell
          key={key}
          style={getCellWidth(columnsProjection[key])}
        >
          {item[key]}
        </TableCell>
      ));

    return <TableRow key={item[itemUniqueKey]}>{cells}</TableRow>;
  });
}

function getCellWidth(flexBasis: number = 200) {
  return { flexBasis };
}

function getScrollbarStyle({ items, tableColumns }: DatagridTableProps) {
  const defaultWidth = 200;
  const scrollbarOffset = 100;

  const widthFromColumns = tableColumns.reduce((totalWidth, column) => {
    totalWidth = column.flexBasis || defaultWidth;
    return totalWidth;
  }, 0);

  const widthFromItemsCount = items.length * defaultWidth;

  const minWidth = (widthFromColumns || widthFromItemsCount) - scrollbarOffset;

  return { minWidth };
}
