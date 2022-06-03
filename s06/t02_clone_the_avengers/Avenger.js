class ExtendableFunc extends Function {
    constructor() {
        super('...args', 'return this.self.call(...args)')
        return this.self = this.bind(this)
    }
}


module.exports.Avenger = class Avenger extends ExtendableFunc {
    constructor(name, alias, gender, age, powers, hp) {
        super()
        this.heroName = name
        this.alias = alias
        this.gender = gender
        this.age = age
        this.powers = powers
        this.hp = hp
    }

    toString() {
        return `name: ${this.heroName}\n` + `gender: ${this.gender}\n` + `age: ${this.age}`
    }

    call() {
        return `${this.alias.toUpperCase()}\n` + this.powers.join('\n')
    }
}
