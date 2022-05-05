import DestinationInfo from "components/sections/DestinationInfo";
import TopStepMessage from "components/TopStepMessage/TopStepMessage";
import Background from "containers/Background/Background";
import Head from "next/head";
import React from "react";

const Destination = () => {
  return (
    <>
      <Head>
        <title>Space Tourism | Destination</title>
      </Head>
      <Background page="destination">
        <TopStepMessage prefix="01" message="Pick your destination" />
        <DestinationInfo />
      </Background>
    </>
  );
};

export default Destination;
