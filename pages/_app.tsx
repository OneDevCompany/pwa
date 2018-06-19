import * as React from 'react';
import App from 'next/app';
import { AppComponentContext, Container } from 'next/app';
import { Layout } from 'components/ui';

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
        <Layout appTitle="App Name">
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
