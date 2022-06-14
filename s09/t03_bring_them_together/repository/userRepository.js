'use strict'

const pool = require('../db')

module.exports = class UserRepository {
    constructor() {
        this.pool = pool
    }
    async findById(id) {
        let x = await this.pool.query(`SELECT * FROM users WHERE id=${id}`)
        console.log(x)
    }
    async findByEmail(email) {
        let x = await this.pool.query(`SELECT * FROM users WHERE email="${email}"`)
        return x[0]
    }
    async findByLogin(login) {
        let x = await this.pool.query(`SELECT * FROM users WHERE login="${login}"`)
        return x[0]
    }
    async delete(id){
        await this.pool.query(`DELETE FROM users WHERE id=${id}`)
    }
    async save(user) {
        await this.pool.query(`INSERT INTO users (login, password, full_name, email)
            VALUES("${user.login}", "${user.password}", "${user.full_name}", "${user.email}")
            ON DUPLICATE KEY UPDATE password="${user.password}", email="${user.email}"`)
    }
}