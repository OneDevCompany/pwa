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
import { pickAll } from 'ramda';

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
      // style={getScrollbarStyle(props)}
      style={{ minWidth: 800 }}
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

// TODO: refactor
function renderRows(props: DatagridTableProps) {
  const { itemUniqueKey, tableColumns } = props;

  const columnsStyles = tableColumns
    .reduce((accu, curr) => {
      accu[curr.key] = curr.style;
      return accu;
    }, {} as StringKeyValuePair<CSSProperties>);

  const keysUsedInColumns = Object.keys(columnsStyles);

  const items: StringKeyValuePair[] = props.items.map(pickAll(keysUsedInColumns));

  return items.map(item => {
    const cells = keysUsedInColumns
      .map(key => (
        <TableCell
          key={key}
          style={getCellStyle(columnsStyles[key])}
        >
          {item[key]}
        </TableCell>
      ));

    return <TableRow key={item[itemUniqueKey]}>{cells}</TableRow>;
  });
}

function getFlexBasis(style: CSSProperties = {}) {
  const defaultFlexBasis = 200;
  const customFlexBasis = style.flexBasis;
  const width = customFlexBasis || defaultFlexBasis;
  return Number(width);
}

function getCellStyle(style: CSSProperties) {
  const flexBasis = getFlexBasis(style);
  return { ...style, flexBasis };
}

function getScrollbarStyle({ items, tableColumns }: DatagridTableProps) {
  const defaultWidth = 200;
  const scrollbarOffset = 100;

  const widthFromColumns = tableColumns.reduce((totalWidth, column) => getFlexBasis(column.style), 0);
  const widthFromItemsCount = items.length * defaultWidth;

  const minWidth = (widthFromColumns || widthFromItemsCount) - scrollbarOffset;

  return { minWidth };
}
