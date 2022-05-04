import Hero from "components/sections/Hero";
import Background from "containers/Background/Background";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Space Tourism | Home</title>
      </Head>
      <Background page="home">
        <Hero />
      </Background>
    </>
  );
};

export default Home;
