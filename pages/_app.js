import React from 'react';
import '../style/style.css';
import Head from 'next/head';
import App from 'next/app';
import Script from 'next/script';

const JuJiuApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>DaXiao</title>
      </Head>

      <Component {...pageProps} />
      <Script src='/js/opencv.js'></Script>
    </>
  );
};

// JuJiuApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`

//   let appProps = {};

//   appProps = await App.getInitialProps(appContext);

//   return { ...appProps };
// };

export default JuJiuApp;
