
const express = require('express')
const expressThymeleaf = require('express-thymeleaf')
const {TemplateEngine} = require('thymeleaf')
const bodyParser = require('body-parser')
const PORT = process.env.PORT ?? 3000
var check = require('./script')

const app = express();
const templateEngine = new TemplateEngine()
app.engine('html', expressThymeleaf(templateEngine))
app.set('view engine', 'html')
app.set('views', __dirname + '/')
app.use(bodyParser.urlencoded({extended: false}))

app.listen(PORT, () => {
    console.log(`Server has been actived on port ${PORT}...`)
})

app.get('/', function (req, res) {
    res.render('index', {answer: ''})
})


app.post('/', (req, res) => {
    if (!req.body)
        return res.sendStatus(400)
    
    let str = req.body['answer'];
    if (check(str)) {
        return res.render('index', {
            answer: 'Correct!'
        })
    } else {

        res.render('index', {
            answer: 'Shame on you! Go and watch Avengers!'
        });
    }
})
