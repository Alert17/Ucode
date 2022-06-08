const mysql = require('mysql2')
const bcrypt = require('bcrypt')
const config = require('./config.json')
const connection = mysql.createConnection(config)

function query(user, response) {
    const sql = 'INSERT INTO users SET ?'
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10))

    connection.query(sql, user, function (err) {
        if (err) {
            return response.render('./public/registration')
        }
        response.render('./public/profile', user)
    })
}

module.exports.query = query

