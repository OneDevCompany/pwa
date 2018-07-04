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
      { key: 'name', header: 'Name' },
      { key: 'email', header: 'Email' },
      { key: 'occupation', header: 'Occupation', noSort: true, style: { flexBasis: 180 } },
      { key: 'age', header: 'Age', style: { flexBasis: 100 } },
    ]}
  />
);
