
import {getFilteredEvents} from "../../lib/events";
import EventsList from "../../components/events/events-list";

export default function FilteredEventsPage({events}) {
    console.log("Filtered Events page loaded");

    if (!events.length){
        return (<h2>No events found in that year.month</h2>)
    } else {
        return (
            <div>
                <h1>Filtered Events Page</h1>
                <EventsList events={events}/>
            </div>
        )
    }

    return (
        <div>
            <h1>Events Page</h1>
            <EventsList events={events}/>
        </div>
    )
}

export function getServerSideProps(context) {

    const events = getFilteredEvents(context.params.slug[0],
        context.params.slug[1])

    return {
        props: {events}
    };
}