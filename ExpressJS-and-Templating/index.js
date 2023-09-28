const express = require('express')
const catalogController = require('./catalogController')

const app = express()

app.get('/', (req, res) => {
    // res.write('Hello there')
    // res.end()
    res.sendFile(__dirname + '/index.html')
})

app.route('/create')

    .get((req, res) => {
        res.send('<form method="POST"><input name="name"><button>Send</button></form>')
    })
    .post((req, res) => {
        console.log('Handling POST request')
        res.redirect('/catalog')
        res.end()
    })


app.delete('/create', (req, res) => {
    console.log('delete');
    res.end()
})

app.use(catalogController)

app.get('/data', (req, res) => {
    res.json([
        {
            name: 'Peter',
            age: 25,
        }, {
            name: 'Ivan',
            age: 25,
        }
    ])
})

app.all('*', (req, res) => {
    res.send('404 Not Found')
})

app.listen(3000)