const {Avenger} = require("./Avenger")

module.exports.Team = class Team {
    constructor(id, avengers) {
        this.id = id
        this.avengers = avengers
    }

    battle(damage) {
        for (let avenger of this.avengers) 
            avenger.hp -= damage.damage
        
    }

    calculateLosses(clonedTeam) {
        let count = 0;
        clonedTeam.forEach(avenger => { 
            if (avenger.hp <= 0)
                count += 1
        })

        if (!count)
            console.log(`We haven't lost anyone in this battle!`)
        else 
            console.log(`In this battle we lost ${count} Avengers.`)
    }

    clone() {
        let array = []
        this.avengers.forEach(element => {
            let copy = Object.assign({}, element)
            Object.setPrototypeOf(copy, Object.getPrototypeOf(element))
            array.push(copy)
        })
        return this.avengers = array
    }
}
