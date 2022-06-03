const express = require('express')
const normal = require('./normal-router')
const quantum = require('./quantum-router')

const PORT = 3000

const app = express()
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

const time = normal.calculateTime()
const quantumTime = quantum.calculateTime()

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})

app.get('/', (req, res, next) => {
    res.render('start', {})
    
})

app.get('/normal', (req, res, next) => {
    res.render('normal', {
            year: time.years(),
            month: time.months(),
            day: time.days()
        })
})

app.get('/quantum', (req, res, next) => {
    res.render('quantum', {
            quantumYear : quantumTime[0],
            quantumMonth : quantumTime[1],
            quantumDay: quantumTime[2]
        })
})