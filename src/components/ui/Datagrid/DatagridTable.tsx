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
import { DatagridTableData } from './models';

type DatagridTableProps = DatagridTableData;

export const DatagridTable: SFC<DatagridTableProps> = (props) => (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell head>Name</TableCell>
          <TableCell head sortOrder="asc" active>Email</TableCell>
          <TableCell head>Profession</TableCell>
          <TableCell head>Age</TableCell>
        </TableRow>
      </TableHead>

      <Scrollbars
        className="odc-table__body-scrollbars"
        style={{ minWidth: 800 - 100 }}
      >
        <TableBody>
          {renderRows(props)}
        </TableBody>
      </Scrollbars>
    </Table>
  );

function renderRows({ items, uniqueKey }: DatagridTableProps) {
  return items.map(item => {
    const cells = Object
      .keys(item)
      .map(key => <TableCell key={key}>{item[key]}</TableCell>);

    return <TableRow key={item[uniqueKey]}>{cells}</TableRow>;
  });
}
