import Head from 'next/head';

import type { AppProps } from 'next/app';

import '../styles/globals.css';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Next TS Demo</title>
        <meta name="description" content="Demo of TypeScript used with Next.js." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
