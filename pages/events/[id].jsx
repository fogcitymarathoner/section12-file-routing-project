import EventItem from '../../components/events/event-item';
import {Fragment} from "react";
import EventSummary from '../../components/event-detail/event-summary';
import {getEventById} from "../../lib/events";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/error-alert/error-alert";
import Button from "../../components/ui/button";
//
export default function EventPage({event}) {
    console.log("Event page loaded");
    if (event) {return (
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

    )} else {
        return (
            <div className='center'>
                <ErrorAlert>
                    <p>No events found for that id</p>
                </ErrorAlert>
                <div className="center"><Button link='/events'>Show All Events</Button></div>
            </div>
        )
    }

}


export function getServerSideProps(context) {

    const event = getEventById(context.params.id)

    return {
        props: {
            event
        },
    };
}

