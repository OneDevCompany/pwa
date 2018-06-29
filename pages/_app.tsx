import * as React from 'react';
import App from 'next/app';
import { AppComponentContext, Container } from 'next/app';
import { DrawerContent } from 'components/commons';
import { Layout } from 'components/ui';

import '../src/styles/index.scss';

console.warn('TODO', 'apply patterns https://levelup.gitconnected.com/ultimate-react-component-patterns-with-typescript-2-8-82990c516935');
console.warn('TODO', 'check if call a funciton like this.renderSomething() inside render() always return false in componentShouldUpdate');
console.warn('TODO', 'add headerRightElements and headerLeftElements props for render elements in DatagridToolbar sections');
console.warn('TODO', 'create serach input in Datagrid');
console.warn('TODO', 'refactor TableCell. Maybe create a TableCellHeader and TableCellBody?');
console.warn('TODO', 'pagination: decrease padding in items of "Rows per page" <Select>');
console.warn('TODO', 'create type for "value" and "options" props in Select component');
console.warn('BUG', 'last column is partially hidden when mobile size');
console.warn('TODO', 'add tooltips in buttons and table head');
console.warn('TODO', 'set font-weight: 300 as default for some typographies');
console.warn('TODO', 'split CSS code');
console.warn('TODO', 'check performance at components');
console.warn('TODO', 'create a issue at jamesmfriedman/rmwc: TopAppBar:fixed not working. TopAppBar is by default fixed. Set it to fixed={false} doesnt work');

console.warn('EXTRA', 'create a vscode extension jsx utils');
console.warn('EXTRA', 'refactor all styles to use css grid');

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppComponentContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Layout
          appName="App Name"
          drawerContent={<DrawerContent />}
        >
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
