const express = require('express')
const expressThymeleaf = require('express-thymeleaf')
const {TemplateEngine} = require('thymeleaf')
const bodyParser = require('body-parser')

const app = express()
const templateEngine = new TemplateEngine()
app.engine('html', expressThymeleaf(templateEngine))
app.set('view engine', 'html')
app.set('views', __dirname + '/')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}))

const User = require('./models/user')

app.listen(3000)

app.get('/', function (req, res) {
    res.render('./public/login')
})

app.post('/login', (req, res) => {
    if (!req.body) {
        return res.sendStatus(400)
    }
    let user = new User(req.body.login, req.body.password)
    user.request(res)
})
