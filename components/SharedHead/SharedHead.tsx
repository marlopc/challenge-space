import Head from "next/head";
import React from "react";

const SharedHead: React.FC = () => {
  return (
    <Head>
      <link
        rel="preload"
        href="/assets/fonts/BarlowCondensed-Bold.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/assets/fonts/BarlowCondensed-Regular.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/assets/fonts/Bellefair-Regular.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <title>Space Tourism</title>
      <meta
        name="description"
        content="Let's face it, if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!"
      />
    </Head>
  );
};

export default SharedHead;
