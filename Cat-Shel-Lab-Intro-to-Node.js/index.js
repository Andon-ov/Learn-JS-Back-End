const http = require('http')
const PORT = 5000
const { homeTemplate, catTemplate } = require('./views/home/index')
const siteCss = require('./content/styles/site')
const addBreed = require('./views/addBreed')
const addCat = require('./views/addCat')

const cats = [
    {
        id: 1,
        name: 'Joni',
        breed: 'Persian',
        description: 'Very cute cat!'
    },
    {
        id: 1,
        name: 'Joni',
        breed: 'Persian',
        description: 'Very cute cat!'
    },
    {
        id: 1,
        name: 'Ivan',
        breed: 'Persian',
        description: 'Very cute cat!'
    },
    {
        id: 1,
        name: 'Jordan',
        breed: 'Persian',
        description: 'Very cute cat!'
    }
]

const server = http.createServer(async (req, res) => {
    const { url } = req

    console.log(url.url);

    if (url === '/') {

        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(homeTemplate)

    } else if (url === '/styles/site.css') {

        res.writeHead(200, { 'Content-Type': 'text/css' })
        res.write(siteCss)

    } else if (url === '/cats/add-breed') {

        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(addBreed)

    } else if (url === '/cats/add-cat') {

        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(addCat)

    }

    res.end()
})

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`)) 