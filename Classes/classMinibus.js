let car = require('./classCar')

class minibus extends car {

    constructor(modelName, maxSpeed, price, color, consumption, places) {

        super(modelName, maxSpeed, price, color, consumption);
        this.places = places;
    }
}

module.exports = minibus;