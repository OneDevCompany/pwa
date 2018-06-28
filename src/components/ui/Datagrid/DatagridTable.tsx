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

export const DatagridTable: SFC<{}> = () => (
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
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Danilo Barros</TableCell>
          <TableCell>danilobarros@email.com</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>33</TableCell>
        </TableRow>
      </TableBody>
    </Scrollbars>
  </Table>
);
