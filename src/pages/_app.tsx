import React from "react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import SEO from "../../next-seo.config";
import DefaultLayout from "../layouts/DefaultLayout";
import { GlobalStyles } from "../styles/global-styles";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <DefaultLayout>
          <Component {...pageProps} />
          <GlobalStyles />
        </DefaultLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
