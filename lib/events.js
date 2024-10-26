import sql from 'better-sqlite3'

const db = sql('../events.db');

export function getFeaturedEvents() {

    const stmt = db.prepare('SELECT * FROM events WHERE featured = ?');
    const featuredEvents = stmt.all(1);
    console.log(featuredEvents);
}