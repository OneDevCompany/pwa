import * as React from 'react';
import { Datagrid, SquareButton } from 'components/ui';
import Link from 'next/link';

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
  />
);
