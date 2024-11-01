import sql from 'better-sqlite3'

const db = sql('events.db', { verbose: console.log });

export function getFeaturedEvents() {
    const stmt = db.prepare('SELECT * FROM events WHERE isFeatured = ?');
    const featuredEvents = stmt.all(1);
    return featuredEvents
}

export function getAllEvents() {
    const stmt = db.prepare('SELECT * FROM events');
    const events = stmt.all();
    console.log(events);
    return events
}

export function getFilteredEvents(year, month) {

    const beginEpoch = new Date(`${year}-${month}-1`);
    let endEpoch = new Date(`${year}-${month}-1`);
    let beginEpochMonth = beginEpoch.getMonth();
    // Set the date to the next month
    endEpoch.setMonth(beginEpochMonth + 1);
    const stmt = db.prepare('SELECT * FROM events where date >= ? and date < ?');
    const events = stmt.all(beginEpoch.getTime(), endEpoch.getTime());
    return events
}

export function getEventById(id) {
    const stmt = db.prepare('SELECT * FROM events WHERE id = ?');
    const event = stmt.get(id);
    console.log(event);
    if (event) {return event} else {return null}

}
