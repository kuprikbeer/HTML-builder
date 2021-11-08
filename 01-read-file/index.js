const path = require('path')
const fs = require('fs')

const myStream = fs.ReadStream(path.join(__dirname, 'text.txt'))

function readFile() {
    myStream.on('data', (data) => {
        console.log(data.toString())
    })
}
readFile()