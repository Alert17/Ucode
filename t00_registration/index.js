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
    res.render('./public/registration')
})

app.post('/signup', (req, res) => {
    let get = req.body
    if (!get) { return res.sendStatus(400) }
    if (get.login === '' || get.full_name === '' || get.email === '' || get.password === '') {
        return res.render('./public/registration', {
            login: get.login,
            full_name: get.full_name,
            email: get.email,
            errorMsg: 'Err: Some fields are empty'
        })
    }
    if (get.password !== get.confirm_password) {
        return res.render('./public/registration', {
            login: get.login,
            full_name: get.full_name,
            email: get.email,
            errorMsg: 'Err: Passwords do not match'
        })
    }
    let user = new User(get.login, get.password, get.full_name, get.email)
    user.request(res)
})
