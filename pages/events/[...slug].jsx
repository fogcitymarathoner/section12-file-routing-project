
import {getFilteredEvents} from "../../lib/events";
import EventsList from "../../components/events/events-list";
import ResultsTitle from "../../components/results-title/results-title";
import {Fragment} from "react";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/error-alert/error-alert";
export default function FilteredEventsPage({events, year, month}) {
    const date = new Date(new Date(year, month + 2).getTime() + 86400000)
    if (
        isNaN(year) ||
        isNaN(month) ||
        year > 2030 ||
        year < 2021 ||
        month < 1 ||
        month > 12
    ) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>Invalid filter. Please adjust your values!</p>
                </ErrorAlert>
                    <div className='center'>
                        <Button link='/events'>Show All Events</Button>
                    </div>
            </Fragment>
    )
    }

    if (!events || events.length === 0){
        return (
            <Fragment>
                <div className='center'>
                    <ErrorAlert>
                        <p>No events found in that year.month</p>
                    </ErrorAlert>
                    <div className="center"><Button link='/events'>Show All Events</Button></div>
                </div>
            </Fragment>
    )
    } else {
        return (
            <Fragment>
                <ResultsTitle date={date}/>
                <EventsList events={events}/>
            </Fragment>
        )
    }

}

export function getServerSideProps(context) {

    const events = getFilteredEvents(context.params.slug[0],
        context.params.slug[1])

    return {
        props: {events, year:context.params.slug[0], month: context.params.slug[1]}
    };
}