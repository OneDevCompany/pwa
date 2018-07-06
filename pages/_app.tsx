import * as React from 'react';
import App from 'next/app';
import { AppComponentContext, Container } from 'next/app';
import { DrawerContent } from 'components/commons';
import { Layout } from 'components/ui';
import fetch from 'isomorphic-unfetch';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({ uri: 'http://localhost:9000', fetchOptions: { fetch } });

import '../src/styles/index.scss';

// TODO: remove custom_typings for next and rmwc?
// TODO: refactor all styles to use css grid
// TODO: apply patterns https://levelup.gitconnected.com/ultimate-react-component-patterns-with-typescript-2-8-82990c516935
// TODO: refactor for use ramda?
// TODO: check if call a funciton like this.renderSomething() inside render() always return false in componentShouldUpdate
// TODO: add tooltips in buttons and table head
// TODO: set font-weight: 300 as default for some typographies
// TODO: split CSS code
// TODO: check performance at components
// TODO: create a issue at jamesmfriedman/rmwc: TopAppBar:fixed not working. TopAppBar is by default fixed. Set it to fixed={false} doesnt work
// TODO: create a vscode extension jsx utils

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
        <ApolloProvider client={client}>
          <Layout
            appName="App Name"
            drawerContent={<DrawerContent />}
          >
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </Container>
    );
  }
}
