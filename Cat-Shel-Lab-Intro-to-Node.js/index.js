const http = require('http')
const fs = require('fs/promises')
const PORT = 5000


const server = http.createServer((req, res) => {
    const { url } = req

    if (url === '/') {

    }
    // 
    res.write('Hello')
    res.end()
})

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

