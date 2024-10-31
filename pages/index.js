import {Fragment} from 'react';
import Head from 'next/head';

import Hero from '../components/home-page/hero';
import EventsList from "../components/events/events-list";
import {getFeaturedEvents} from '../lib/events'

function HomePage({events}) {
    return (
        <Fragment>
            <Head>
                <title>Marc's Events</title>
                <meta
                    name='description'
                    content='Events app for practicing programming and web development.'
                />
            </Head>
            <Hero/>
            <EventsList events={events}/>
        </Fragment>
    );
}

export function getServerSideProps() {
    const events = getFeaturedEvents()
    return {
        props: {
            events
        },
    };
}

export default HomePage;
