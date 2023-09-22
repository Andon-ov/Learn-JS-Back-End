const { html, data } = require('../util')


function catalogPage(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(html(`
    <h1>Catalog</h1>
    <p>List of items</p>
    <ul>
    ${data.map(i => `<li>${i.name} - ${i.color}</li>`).join('\n')}
    </ul>
    `, 'Catalog'))
    res.end()
}

module.exports = {
    catalogPage
}