'use strict'

const mysql = require('./db.js')

module.exports = class Model {
    constructor(name, description, class_role, race) {
        this.id = 0
        this.heroName = name
        this.heroDescription = description
        this.class_role = class_role
        this.race = race
    }
    save() {
        mysql.connect()
        let hero = {
            name: this.heroName,
            description: this.heroDescription,
            class_role: this.class_role,
            race: this.race
        }
        mysql.query('INSERT INTO heroes SET ?', hero, function(err, rows, fields) {
            if (err)
                throw err
            this.id = rows.insertId
        })
        console.log(`Successful save hero: ${this.heroName}.`)
    }


    delete(id) {
        let sql = 'DELETE FROM heroes WHERE id = ?'
        mysql.connect(function(err) {
            if (err)
                throw err
            mysql.query(sql, id, function (err, result) {
                if (err) throw err
                console.log('Successful delete hero, count: ' + result.affectedRows)
            })
        })
    }
}
