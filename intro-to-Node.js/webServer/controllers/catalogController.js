const { html } = require('../util')



function catalogPage(res, req) {

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(html(`
    <h1>Catalog</h1>
    <p>List of items</p>
    `, 'Catalog'))
    res.end()
}

module.exports = {
    catalogPage
}