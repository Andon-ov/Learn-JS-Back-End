const EventEmitter = require('events');


const subscribers = {};


function subscribe(type, callback) {
    console.log('new subscriber for ' + type);
    if (subscribers[type] == undefined) {
        subscribers[type] = []
    }
    subscribers[type].push(callback)
}

function publish(type, data) {
    console.log('received ' + type);
    const currentSubscribers = subscribers[type]

    if (currentSubscribers) {
        for (const subscriber of currentSubscribers) {
            subscriber(data)
        }
    }
}
const emitter = new EventEmitter();

module.exports = emitter

// module.exports = {
//     subscribe,
//     publish
// }