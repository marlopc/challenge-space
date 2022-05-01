import Nav from "components/Nav";
import Head from "next/head";
import React from "react";
import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

const Main = styled.main`
  max-width: 1440px;
  margin: 0 auto;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Space Tourism</title>
      </Head>
      <Nav />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
