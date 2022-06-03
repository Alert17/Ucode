function calculateTime() {
    let real = new Date(1939, 1, 1)
    let now = new Date()
    let result = []

    let diff = (Math.abs(real) + Number(now)) / 7
    let quantum = new Date(Number(real) + Number(diff))

    result.push(quantum.getFullYear() - real.getFullYear())
    result.push(quantum.getMonth() - real.getMonth())
    result.push(quantum.getDate() - real.getDate())
    return result;
}

module.exports.calculateTime = calculateTime