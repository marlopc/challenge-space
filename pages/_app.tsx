import Layout from "containers/Layout/Layout";
import type { AppProps } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/globalStyles";
import { theme } from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
