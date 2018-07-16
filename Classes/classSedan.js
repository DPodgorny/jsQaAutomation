let car = require('./classCar');

class sedan extends car {

    constructor(modelName, maxSpeed, price, color, consumption, trunkSize) {

        super(modelName, maxSpeed, price, color, consumption);
        this.trunkSize = trunkSize;
    }
}

module.exports = sedan;