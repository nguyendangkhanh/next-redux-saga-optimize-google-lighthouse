import App from 'next/app';
import React, { useEffect } from 'react';
import Head from 'next/head';

import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import createStore from '../redux/store';

import '../utils/polyfill';
import '../utils/api';
import { GlobalStyles } from '../shared/global-styles';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { NextSeo } from 'next-seo';

import siteConfig from '../config';
let initialRender = false;

const MyApp = ({ Component, pageProps, store, isServer, req }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  useEffect(
    () => {
      async function fetchDefaultApi() {
        const locale = API.getStoredLocale(req); // Retrieve the locale from cookie or headers
        const isMobile = API.getDeviceUser(req);
        await store.dispatch(AppActions.startup({ locale }));
        await store.dispatch(AppActions.isMobileChecker({ isMobile }));
        await store.dispatch(AppActions.fetchMetadata());
      }
      if (isServer && initialRender == false) {
        initialRender = true;
        fetchDefaultApi();
      }
    },
    [initialRender],
  );
  return (
    <Provider store={store}>
      <React.Fragment>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content={siteConfig.ogDescription} />
          <meta name="theme-color" content="#317EFB" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {/* <link rel="apple-touch-icon" href="/static/assets/....." />  */}
          {/* <link rel="icon" sizes="192x192" href="/static/assets/" /> */}
          <link rel="manifest" href="/static/favicon/manifest.json" />
          {/* <link rel="shortcut icon" href="/static/images/favicon.ico" /> */}
          <title>{siteConfig.name}</title>
        </Head>
        <MessengerCustomerChat
          pageId={siteConfig.facebookChat.pageId}
          appId={siteConfig.facebookChat.appId}
          htmlRef={siteConfig.facebookChat.htmlRef}
        />
        <NextSeo
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            site_name: 'SiteName',
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
        />
        <GlobalStyles />
        <Component {...pageProps} />
      </React.Fragment>
    </Provider>
  );
};

MyApp.getInitialProps = async ({ Component, ctx, isServer, req }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ ctx });
  }
  if (isServer) {
    await ctx.store.dispatch(AppActions.startup({ locale }));
    await ctx.store.dispatch(AppActions.isMobileChecker({ isMobile }));
    await ctx.store.dispatch(AppActions.fetchMetadata());
  }
  return { pageProps, isServer, req };
};
export default withRedux(createStore)(withReduxSaga(MyApp));
