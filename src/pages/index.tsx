import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Router from 'next/router';

const Home: NextPage = () => {
  React.useEffect(() => {
    Router.push('/skills');
  }, []);

  return (
    <div>
      <Head>
        <title>Victor Maya | ...</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
