const express = require('express')
const path = require('path')
const ip = require('ip')
const os = require('os')

const PORT = 3000

const app = express()

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})


app.get('/', (req, res) => {
    console.log(`a name of file of the executed script: ${path.basename(__filename)}`)
    console.log(`arguments passed to the script: ${process.argv.slice(2)}`)
    console.log(`IP address of the server ${ip.address()}`)
    console.log(`a name of host that invokes the current script: ${os.hostname()}`) 
    console.log(`a name and a version of the information protocol: ${req.protocol}`)
    console.log(`a query method: ${req.method}`)
    console.log(`User-Agent information: ${req.get('user-agent')}`)
    console.log(`IP address of the client: ${ip.address()}`)
    console.log(`a list of parameters passed by URL: ${req.url.slice(1)}`)
})
