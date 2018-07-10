import * as React from 'react';
import { SFC, CSSProperties } from 'react';
import { StringKeyValuePair } from '../models';
import { add, pickAll, pluck } from 'ramda';
import {
  Scrollbars,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableColumn,
  Ordering,
  toggleOrder,
} from 'components/ui';

// TODO: extract TableHead and TableBody with their logic to other files?
// TODO: deal with empty data
// TODO: tableColumns should not be required. Define rules/behaviors
// TODO: should use memoization for performance?
// TODO: when text aligned to left, order arrow should be at right side of header text
// TODO: use Extract or Pick interfaces from TS to reuse this Props in Datagrid
// TODO: see if there is a difference between prop: () => void and prop(): void

export type DatagridTableProps = {
  itemUniqueKey: string;
  items: StringKeyValuePair[];
  tableColumns: TableColumn[];
  onChangeOrdering?: (ordering: Ordering) => void;
} & Ordering;

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
  order: null,
  orderBy: null,
  onChangeOrdering: () => null,
};

// TODO: refactor these functions for use arrow functions

function renderHeaders(props: DatagridTableProps) {
  return props.tableColumns.map(({ header, style, ...otherColumnProps }) => {
    const active = otherColumnProps.key === props.orderBy;
    const order = active ? props.order : undefined;
    const onClick = otherColumnProps.noSort
      ? DatagridTable.defaultProps.onChangeOrdering as () => null
      : handleOrderingChange(otherColumnProps.key, props);

    return (
      <TableCell
        active={active}
        head
        order={order}
        style={getCellStyle(style)}
        onClick={onClick}
        {...otherColumnProps}
      >
        {header}
      </TableCell>
    );
  });
}

function renderRows(props: DatagridTableProps) {
  const { itemUniqueKey, tableColumns } = props;

  const keysConfiguredInTableColumnsProp = pluck<'key', string>('key', tableColumns);

  const columnsStyles = tableColumns
    .reduce((pair, column) => ({
      ...pair,
      [column.key]: column.style,
    }), {} as StringKeyValuePair<CSSProperties>);

  return props.items
    .map(pickAll(keysConfiguredInTableColumnsProp))
    .map((item: StringKeyValuePair) => (
      <TableRow key={item[itemUniqueKey]}>
        {renderBodyCells(item, columnsStyles, keysConfiguredInTableColumnsProp)}
      </TableRow>
    ));
}

function renderBodyCells(
  item: StringKeyValuePair,
  columnsStyles: StringKeyValuePair<CSSProperties>,
  keysConfiguredInTableColumnsProp: string[],
) {
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

const handleOrderingChange = (clickedHeaderKey: string, props: DatagridTableProps) => () => {
  const { order, orderBy } = props;

  if (clickedHeaderKey === orderBy) {
    props.onChangeOrdering({
      order: toggleOrder(order),
      orderBy,
    });

    return;
  }

  props.onChangeOrdering({
    order: 'asc',
    orderBy: clickedHeaderKey,
  });
};
