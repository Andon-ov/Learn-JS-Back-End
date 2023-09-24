const subscribers = {}


function subscribe(type, callback) {
    if (subscribe[type] == undefined) {
        subscribe[type] = []
        subscribe[type].push(callback)
    }
}

function publish(type, data) {
    const currentSubscribers = subscribers[type]

    if (currentSubscribers) {
        for (const subscriber of currentSubscribers) {
            subscriber(data)
        }
    }
}


module.exports = {
    subscribe,
    publish
}