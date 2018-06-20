import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          {/* <meta name="theme-color" content="#9f25b3" /> */}

          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link href="//fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
          <link href="//fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
