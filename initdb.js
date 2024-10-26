const DUMMY_EVENTS = require('./dummy-data');

const sql = require('better-sqlite3');
const db = sql('events.db', { verbose: console.log });
function stringToEpochSeconds(stringDate) {
    return new Date(stringDate).getTime()
}

let convertedDummyEvents = []
//console.log(DUMMY_EVENTS);
DUMMY_EVENTS.forEach(event => {
    convertedDummyEvents.push(
        {
            id: event.id,
            title: event.title,
            description: event.description,
            location: event.location,
            date: stringToEpochSeconds(event.date),
            image: event.image,
            isFeatured: event.isFeatured ? 1 : 0,
        })
})
console.log(convertedDummyEvents);
/*const events = [
    {
        title: 'Lunch',
        date: new Date('2018-05-01 12:00').getTime(),
        featured: 0,
    },
    {
        title: 'Dinner',
        date: new Date('2018-05-01 18:00').getTime(),
        featured: 1,
    },
    {
        title: 'Breakfest',
        date: new Date('2018-05-01 07:00').getTime(),
        featured: 0,
    },
    {
        title: 'Work',
        date: new Date('2018-05-01 09:30').getTime(),
        featured: 1,
    },
    {
        title: 'Garden',
        date: new Date('2018-06-01 09:30').getTime(),
        featured: 0,
    },
    {
        title: 'Swim',
        date: new Date('2018-06-12 06:30').getTime(),
        featured: 1,
    },
    {
        title: 'Brunch',
        date: new Date('2018-06-13 06:30').getTime(),
        featured: 0,
    },
];*/

db.prepare(`
   CREATE TABLE IF NOT EXISTS events (
       id TEXT NOT NULL,
       title TEXT NOT NULL,
       description TEXT NOT NULL,
       location TEXT NOT NULL,
       date INTEGER NOT NULL,
       image TEXT NOT NULL,
       isFeatured INTEGER NOT NULL
    )
`).run();
console.log(convertedDummyEvents)
const insert = db.prepare('INSERT INTO events (id, title, description, location, date, image, isFeatured) VALUES (@id, @title, @description, @location, @date, @image, @isFeatured)');

const insertMany = db.transaction((convertedDummyEvents) => {
    for (const event of convertedDummyEvents) {
        console.log(event)
        insert.run(event);
    }
    }
);

insertMany(convertedDummyEvents);

const stmt = db.prepare('SELECT * FROM events WHERE isFeatured = ?');
const featuredEvents = stmt.all(1);
console.log(featuredEvents);
