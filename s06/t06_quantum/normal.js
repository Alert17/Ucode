function calculateTime() {
    let real = new Date(1939, 1, 1)
    let now = new Date()

    Date.prototype.years = () => {
        return now.getFullYear() - real.getFullYear()
    }

    Date.prototype.months = () => {
        return now.getMonth() - real.getMonth()
    }

    Date.prototype.days = () => {
        return now.getDate() - real.getDate()
    }

    return real;
}

module.exports.calculateTime = calculateTime