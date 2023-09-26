// const { subscribe } = require('./observer')
const emitter = require('./observer')

let runningTotal = 0

emitter.on('message', (data) => {
    runningTotal += data
    console.log('Current running total is ' + runningTotal);
})

// subscribe('message', (data) => {
//     runningTotal += data
//     console.log('Current running total is ' + runningTotal);
// })

