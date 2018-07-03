import * as React from 'react';
import { SFC, CSSProperties } from 'react';
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
import { add, pickAll, pluck } from 'ramda';

// TODO: deal with empty data
// TODO: tableColumns should not be required. Define rules/behaviors

export type DatagridTableProps = {
  items?: StringKeyValuePair[];
  itemUniqueKey?: string;
  tableColumns: DatagridTableColumn[];
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
};

function renderHeaders({ tableColumns }: DatagridTableProps) {
  return tableColumns.map(({ header, style }) => (
    <TableCell
      key={header}
      head
      style={getCellStyle(style)}
    >
      {header}
    </TableCell>
  ));
}

function renderRows(props: DatagridTableProps) {
  const { itemUniqueKey, tableColumns } = props;

  const keysConfiguredInTableColumnsProp = pluck<'key', string>('key', tableColumns);

  return props.items
    .map(pickAll(keysConfiguredInTableColumnsProp))
    .map((item: StringKeyValuePair) => (
      <TableRow key={item[itemUniqueKey]}>
        {renderBodyCells(item, tableColumns, keysConfiguredInTableColumnsProp)}
      </TableRow>
    ));
}

function renderBodyCells(item: StringKeyValuePair, tableColumns: DatagridTableColumn[], keysConfiguredInTableColumnsProp: string[]) {
  const columnsStyles = tableColumns
    .reduce((pair, column) => ({
      ...pair,
      [column.key]: column.style,
    }), {} as StringKeyValuePair<CSSProperties>);

  return keysConfiguredInTableColumnsProp
    .map(key => (
      <TableCell
        key={key}
        style={getCellStyle(columnsStyles[key])}
      >
        {item[key]}
      </TableCell>
    ));
}

function getCellStyle(style: CSSProperties) {
  const flexBasis = getFlexBasis(style);
  return { ...style, flexBasis };
}

function getFlexBasis(style: CSSProperties = {}) {
  const defaultFlexBasis = 200;
  const customFlexBasis = style.flexBasis;
  const width = customFlexBasis || defaultFlexBasis;
  return Number(width);
}

function getScrollbarStyle({ tableColumns }: DatagridTableProps) {
  const minWidth = tableColumns
    .map(column => getFlexBasis(column.style))
    .reduce(add);

  return { minWidth };
}
