import React, { Fragment } from 'react';
import App, { Container } from 'next/app';
import { MuiThemeProvider } from '@material-ui/core/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import { WebpProvider } from '../util/webpContext';
import Theme from '../util/Theme';
import getPageContext from '../util/getPageContext';
import Reset from '../util/reset';

export default class CustomApp extends App {
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps: { ...pageProps } };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <div>
          <Container>
            <Reset />
            <WebpProvider>
              <MuiThemeProvider
                theme={Theme}
                sheetsManager={this.pageContext.sheetsManager}
              >
                <Component {...pageProps} pageContext={this.pageContext} />
              </MuiThemeProvider>
            </WebpProvider>
          </Container>
        </div>
      </Fragment>
    );
  }
}
