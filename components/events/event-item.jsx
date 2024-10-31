import Image from "next/image";
import Button from "../ui/button";
import classes from './event-item.module.css'
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";

export default function EventItem({event, index}) {
    //# FIXME: Understand the 86400000 correction
    const humanReadableDate = new Date(event.date + 86400000).toLocaleDateString("en-US", {
        weekday: 'long', // This will include the day of the week
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const formattedAddress = event.location.replace(', ', '\n')
    return (
        <li key={index} className={classes.item}>
            <Image src={`/${event.image}`} alt={`/${event.title}`} width={300}
                   height={200}/>
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{event.title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}><Button link={`/events/${event.id}`}>
                    <span>Explore Event</span>
                    <span className={classes.icon}><ArrowRightIcon/></span>
                </Button>
                </div>
            </div>
        </li>
    )
}