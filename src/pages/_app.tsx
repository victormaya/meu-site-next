import React from 'react'

import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import SEO from '../../next-seo.config'
import Loading from '../components/Loading'
import { HomeContextProvider } from '../context/homeContext'
import useLoading from '../hooks/useLoading'
import DefaultLayout from '../layouts/DefaultLayout'
import { GlobalStyles } from '../styles/global-styles'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  const { loading } = useLoading()

  return (
    <HomeContextProvider>
      <ThemeProvider theme={theme}>
        <DefaultSeo {...SEO} />
        <Head>
          <meta
            property="og:image"
            content="https://victormayadev.com/_next/static/media/perfil.36a1485c.jpeg"
          />
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
    </HomeContextProvider>
  )
}

export default MyApp
