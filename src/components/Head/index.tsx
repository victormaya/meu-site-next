import React from 'react';
import Head from 'next/head';

// import { Container } from './styles';

function HeadComponent({ title }: { title: string }) {
  return (
    <Head>
      <title>Victor Maya | {title}</title>
    </Head>
  );
}

export default HeadComponent;
