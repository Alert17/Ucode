let {Product} = require('./product')


module.exports.Ingestion = class Ingestion {
    products = []
    day_of_diet = 0
    constructor(meal_type, id) {
        this.meal_type = meal_type
        this.id = id
    }

    setProduct(product) {
        this.products.push(product)
    }

    getFromFridge(product) {
        for (let prod of this.products){
            if (prod.name === product) {
                try {
                    prod.check()
                } catch (error) {
                    error.message = `To many calories in ${product} for ${this.meal_type}`
                    throw error
                }
            }
        }
    }

    getProductInfo(product) {
        let result = {}
        for (let prod of this.products) {
            if (prod.name === product) {
                result.kcal = prod.kcal_per_portion
                return result
            }
        }
    }
}
