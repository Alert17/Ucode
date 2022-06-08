const express = require('express')
const expressThymeleaf = require('express-thymeleaf')
const {TemplateEngine} = require('thymeleaf')
const bodyParser = require('body-parser')


let parseCSV = function parseCSV(path) {
    const data = []
    return new Promise((resolve, reject) => {
        fs.createReadStream(path)
            .pipe(parse({ delimiter: ',' }))
            .on('data', row => {
                data.push(row)
            })
            .on('end', () => resolve(data))
    })
}

let transform = function transform(data) {
    let result = []
    data.map(item => {
        result.push([item[0], item[1], item[2], item[3], item[4],
            item[5], item[6], item[7], item[8], item[9], item[10]])
    })
    return result
}

const app = express()
const templateEngine = new TemplateEngine()
app.engine('html', expressThymeleaf(templateEngine))
app.set('view engine', 'html')
app.set('views', __dirname + '/')
app.use(bodyParser.urlencoded({extended: false}))

app.listen(3000)

app.get('/', async function(req, res) {
    res.render('index')
})

app.post('/', async function(req, res) {
    const data = await parseCSV(req.body.csv)
    const table = transform(data)
    res.render('index', {
        table: JSON.stringify(table)
    })
})

