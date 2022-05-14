import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import useLoading from '../hooks/useLoading';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';
import DefaultLayout from '../layouts/DefaultLayout';
import Loading from '../components/Loading';

function MyApp({ Component, pageProps }: AppProps) {
  const { loading } = useLoading();

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Passion+One:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DefaultLayout>
        {loading ? <Loading /> : <Component {...pageProps} />}
        <GlobalStyles />
      </DefaultLayout>
    </ThemeProvider>
  );
}

export default MyApp;
