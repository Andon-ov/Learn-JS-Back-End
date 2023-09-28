const express = require('express')

const app = express()

app.get('/', (req, res) => {
    // res.write('Hello there')
    // res.end()
    res.send('Hello there')
})
app.get('/create', (req, res) => {
    res.send('<form method="POST"><input name="name"><button>Send</button></form>')
})

app.post('/create', (req, res) => {
    console.log('Handling POST request')
    res.end()
})


app.delete('/create', (req, res) => {
    console.log('delete');
    res.end()
})
app.listen(3000)