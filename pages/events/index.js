import {getAllEvents} from "../../lib/events";
import EventsList from "../../components/events/events-list";
import {Fragment} from "react";
import EventsSearch from "../../components/events/events-search";
import {useRouter} from "next/router";

export default function EventsPage({events}) {
    const router = useRouter();
    function findEventsHandler(year, month){
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath)
    }
    return (
        <Fragment>
            <EventsSearch onSearch={findEventsHandler}/>
            <EventsList events={events}/>
        </Fragment>
    )
}

export function getServerSideProps() {
    const events = getAllEvents()
    return {
        props: {
            events
        },
    };
}