import * as React from 'react';
import { Fragment, SFC } from 'react';
import { Layout } from 'odc-ui';
import { createMuiTheme, CssBaseline } from '@material-ui/core';

// const theme = createMuiTheme({
//   palette: {

//   }
// })

export const App: SFC<{}> = () => (
  <Fragment>
    <CssBaseline />
    <Layout appBarTitle="Title" />
  </Fragment>
);
