import * as React from 'react';
import { Datagrid, SquareButton } from 'components/ui';
import { Link } from 'components/commons';

export default () => (
  <Datagrid
    noFilters
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
