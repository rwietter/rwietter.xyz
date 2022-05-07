import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const About = () => (
  <>
    <Head>
      <title>next-pwa example</title>
    </Head>
    <h1>About</h1>
    <Link href="/">Home</Link>
  </>
);

export default About;
