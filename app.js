const log = require('./logger')

const path = require('path')

const os = require('os')

const fs = require('fs')

var pathObj = path.parse(__filename)

log('message')

log(pathObj)

log(`total mem: ${os.totalmem()}`)
log(`free mem: ${os.freemem()}`)

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

// function sayHello(name) {
//    console.log('hello ' + name)
//}

//sayHello('Bert')
