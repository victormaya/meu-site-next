import React from 'react';
import Head from 'next/head';

function HeadComponent({ title }: { title: string }) {
  return (
    <Head>
      <title>Victor Maya |{title}</title>
    </Head>
  );
}

export default HeadComponent;
