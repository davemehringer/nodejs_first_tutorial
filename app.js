
const path = require('path')

const os = require('os')

const fs = require('fs')

var pathObj = path.parse(__filename)


fs.readdir(
    './',
    function(err, files) {
    if (err) {
        console.log(`Error: ${err}`)
    }
    else {
        console.log(`Files: ${files}`)
    }

})

console.log(pathObj)

console.log(`total mem: ${os.totalmem()}`)
console.log(`free mem: ${os.freemem()}`)


const Logger = require('./logger')
const logger = new Logger()


// must be registered prior to emit()
logger.on('messageLogged', (evt) => {
    console.log('Listener called', evt)
})

logger.log('message')

const http = require('http')

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('Hello client')
        response.end()
    }
    else if (request.url == '/api/courses') {
        response.write(JSON.stringify([1, 2, 3]))
        response.end()
    }
})
server.on('connection', (socket) => {
    console.log('New connection initiated...')
})
server.listen(3000)
console.log('Lisstening on port 3000...')




