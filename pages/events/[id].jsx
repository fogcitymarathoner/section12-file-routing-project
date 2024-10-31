import EventItem from '../../components/events/event-item';
import {Fragment} from "react";
import EventSummary from '../../components/event-detail/event-summary';
import {getEventById} from "../../lib/events";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
//
export default function EventPage({event}) {
    console.log("Event page loaded");
    return (
        <Fragment>
            <EventSummary title={event.title}/>
            <EventLogistics
                date={event.data}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>

    )
}


export function getServerSideProps(context) {

    const event = getEventById(context.params.id)

    return {
        props: {
            event
        },
    };
}

