import TopStepMessage from "components/TopStepMessage/TopStepMessage";
import Background from "containers/Background/Background";
import Head from "next/head";
import React from "react";

const Technology = () => {
  return (
    <>
      <Head>
        <title>Space Tourism | Technology</title>
      </Head>
      <Background page="technology">
        <TopStepMessage prefix="03" message="Space launch 101" />
      </Background>
    </>
  );
};

export default Technology;
