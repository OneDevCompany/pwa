import * as React from 'react';
import Link from 'next/link';
import { Datagrid, SquareButton } from 'components/ui';
import { people } from '../src/pages/indexData';

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
    items={people}
    itemUniqueKey="email"
    tableColumns={[
      { header: 'Name' },
      { header: 'Email' },
      { header: 'Occupation', flexBasis: 150 },
      { header: 'Age', flexBasis: 100 },
    ]}
  />
);
