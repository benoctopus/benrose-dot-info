import React, { Fragment } from 'react';
import Document, { Main, NextScript } from 'next/document';
import Head from 'next/head';
import { JssProvider, SheetsRegistry } from 'react-jss';

export default class AppDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheets = new SheetsRegistry();

    const decoratePage = Page => props => (
      <Fragment>
        <Head>
          <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            href="https://fonts.googleapis.com/css?family=Pacifico"
            rel="preload"
            as="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat"
            rel="preload"
            as="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Slab"
            rel="preload"
            as="stylesheet"
          />
        </Head>
        <JssProvider registry={sheets}>
          <Page {...props} />
        </JssProvider>
      </Fragment>
    );

    const renderedPage = renderPage(decoratePage);

    const styles = (
      <style
        type="text/css"
        data-meta="jss-ssr"
        dangerouslySetInnerHTML={{ __html: sheets.toString() }}
      />
    );

    return { ...renderedPage, styles };
  }
}
