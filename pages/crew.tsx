import TopStepMessage from "components/TopStepMessage/TopStepMessage";
import Background from "containers/Background/Background";
import Head from "next/head";
import React from "react";

const Crew = () => {
  return (
    <>
      <Head>
        <title>Space Tourism | Crew</title>
      </Head>
      <Background page="crew">
        <TopStepMessage prefix="02" message="Meet your crew" />
      </Background>
    </>
  );
};

export default Crew;
