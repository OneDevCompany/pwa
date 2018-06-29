import * as React from 'react';
import Link from 'next/link';
import { Datagrid, SquareButton } from 'components/ui';

type Person = {
  name: string;
  email: string;
  occupation: string;
  age: number;
};

const data = [
  {
    name: 'Danilo',
    email: 'danilo@email.com',
    occupation: 'Javascript Developer',
    age: 33,
  },
] as Person[];

export default () => (
  <Datagrid
    mainButton={
      <Link href="/other">
        <SquareButton
          noRipple
          onlyRightBorder
          primary
          use="add"
        />
      </Link>
    }
    data={data}
    dataUniqueKey="email"
  />
);
