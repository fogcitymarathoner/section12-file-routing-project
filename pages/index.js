import { Fragment } from 'react';
import Head from 'next/head';

import Hero from '../components/home-page/hero';


function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Marc's Events</title>
        <meta
          name='description'
          content='Events app for practicing programming and web development.'
        />
      </Head>
      <Hero />
    </Fragment>
  );
}

export function getStaticProps() {

  return {
    props: {
    },
  };
}

export default HomePage;
