// const { subscribe } = require('./observer')
const emitter = require('./observer')

// subscribe('message', (data) => console.log('module 1 received data', data))
emitter.on('message', (data) => console.log('module 1 received data', data))


