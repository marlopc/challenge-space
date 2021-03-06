import SharedHead from "components/SharedHead/SharedHead";
import Layout from "containers/Layout/Layout";
import type { AppProps } from "next/app";
import "public/assets/fonts/preload.css";
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/globalStyles";
import { theme } from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SharedHead />
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
