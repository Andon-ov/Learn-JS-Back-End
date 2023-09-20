const { html } = require('../util')

function homePage(res, req) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(html(`
    <h1>Welcome to our site!</h1>
    <p>Hello world from server!</p>
    `, 'Home Page'))
    res.end()
}



function aboutPage(res, req) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(html(`
    <h1>About Page</h1>
    <p>Contact +359889585858</p>
    `, 'About Page'))
    res.end()
}


function defaultPage(res, req) {
    res.statusCode = 404
    res.write(html(`
    <h1>404 Not Found</h1>
    <p>Page not found!</p>
    `))
    res.end()
}

module.exports = {
    homePage,
    aboutPage,
    defaultPage
}