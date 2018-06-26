import * as React from 'react';
import { Datagrid } from 'components/ui';

import '../src/styles/index.scss';

console.warn('TODO', 'pagination: decrease padding in items of "Rows per page" <Select>');
console.warn('TODO', 'create type for "value" and "options" props in Select component');
console.warn('BUG', 'last column is partially hidden when mobile size');
console.warn('TODO', 'add tooltips in buttons and table head');
console.warn('TODO', 'set font-weight: 300 as default for some typographies');
console.warn('TODO', 'split CSS code');
console.warn('TODO', 'check performance at components');
console.warn('TODO', 'create a issue at jamesmfriedman/rmwc: TopAppBar:fixed not working. TopAppBar is by default fixed. Set it to fixed={false} doesnt work');

export default () => (
  <Datagrid />
);
