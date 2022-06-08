const express = require('express')
const expressThymeleaf = require('express-thymeleaf')
const {TemplateEngine} = require('thymeleaf')
const bodyParser = require('body-parser')
const session = require('express-session')


const app = express()
const templateEngine = new TemplateEngine()
app.engine('html', expressThymeleaf(templateEngine))
app.set('view engine', 'html')
app.set('public', __dirname + '/public')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(
    session({
        secret: 'session secret',
        saveUninitialized: true
    })
)


app.use('/profile', userRouter)
app.use('/', homeRouter)

app.use(function (req, res, next) {
    res.status(404).send('Not Found')
})

app.listen(3000)