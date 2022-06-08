const mysql = require('mysql2')
const config = require('./config.json')
const util = require('util')

const pool = mysql.createPool(config)

pool.getConnection((err, connection) => {
    if (err) {
        if (err) {
            console.error('Database connection was closed.')
        }

    }
    if (connection) {
        connection.release()
    }
})

pool.query = util.promisify(pool.query)

module.exports = pool