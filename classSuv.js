var car = require('./classCar')

class suv extends car {

    constructor(modelName, maxSpeed, price, color, consumption, wheelDrive) {

        super(modelName, maxSpeed, price, color, consumption);
        this.wheelDrive = wheelDrive;
    }
}

module.exports = suv;