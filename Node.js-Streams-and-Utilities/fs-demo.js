// const fs = require('fs');
const fs = require('fs').promises


// Sync version  
// const text = fs.readFileSync('../LICENSE')
// console.log(text.toString());

// Async version
fs.readFile('../LICENSE', (err, data) => {
    if (err !== null) {
        return console.error(err.message)

    }
    console.log(data.toString());

})
// Async variant two

start()

async function start() {
    const data = await fs.readFile('../LICENSE')
    console.log(data.toString());
}