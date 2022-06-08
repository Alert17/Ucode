const express = require('express')
const PORT = process.env.PORT ?? 8080

const app = express()

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})

app.get('/', function (req, res) {
    res.render('index')
})

class Tower {
    name = null;
    age = null;
    salary = null;


    set age(value) {
        return (value > 100 || value < 0) ? this.age : value
    }

    set salary(value) {
        return (value < 100 || value >= 10000) ? this.salary : value
    }
}
