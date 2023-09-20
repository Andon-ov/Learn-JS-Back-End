

// import http from 'http'; -> is the same!
const http = require('http')
const { homePage, aboutPage, defaultPage } = require('./controllers/homeController')
const { catalogPage } = require('./controllers/catalogController')


const port = 5000

const server = http.createServer((req, res) => {
    console.log(req.method, req.url, req.headers);

    const url = new URL(req.url, `http://${req.headers.host}`)

    const routes = {
        '/': homePage,
        '/about': aboutPage,
        '/catalog': catalogPage
    }

    const handler = routes[url.pathname]

    if (typeof handler == 'function') {
        handler(res, req)

    } else {
        defaultPage(res, req)
    }

})

server.listen(port)
console.log(`Server listing port: ${port}`);


// const homePage = `
// <h1>Welcome to our site!</h1>
// <p>Hello world from server!</p>
// `

// const aboutPage = `
// <h1>About Page</h1>
// <p>Contact +359889585858</p>
// `

// const catalogPage = `
// <h1>Catalog</h1>
// <p>List of items</p>
// `

// const defaultPage = `
// <h1>404 Not Found</h1>
// <p>Page not found!</p>
// `

// if (url.pathname === '/') {

//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     res.write(html(homePage))
//     res.end()

// } else if (url.pathname === '/about') {
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     res.write(html(aboutPage))
//     res.end()
// } else {
//     res.write(html(defaultPage))
//     res.statusCode = 404
//     res.end()
// }


