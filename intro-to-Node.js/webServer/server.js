console.log("Hello from server");

// import http from 'http'; -> is the same!
const http = require('http')

const port = 5000

const server = http.createServer((req, res) => {
    const { method, url } = req

    console.log(method, url);
    console.log('Server is running!');

    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    res.write("<h3>Hello from server!</h3>")
    res.end()
})

server.listen(port)
console.log(`Server listing port: ${port}`);