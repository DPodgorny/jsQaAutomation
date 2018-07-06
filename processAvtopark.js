cars = require('./classDeclares');

module.exports.setCarProperties = setCarProperties;
module.exports.sortCars = sortCars;
module.exports.countPrice = countPrice;

//Fill car properties function
function setCarProperties(carObject, model, maxSpeed, price, color, consumption, changeableVar) {

    carObject.setModelName(model);
    carObject.setMaxSpeed(maxSpeed);
    carObject.setPrice(price);
    carObject.setColor(color);
    carObject.setConsumption(consumption);

    if (carObject instanceof cars.sedan) {

        carObject.setTrunkSize(changeableVar);
    }

    else if (carObject instanceof cars.minibus) {

        carObject.setPlaces(changeableVar);
    }
    else if (carObject instanceof cars.suv) {
        carObject.setWheelDrive(changeableVar);
    }
}

//Sort list of cars by consumption
function sortCars(avtoparkArray) {

    function compareConsumption(car1, car2) {

        return car1.consumption - car2.consumption;
    }

    avtoparkArray = avtoparkArray.sort(compareConsumption);

    return avtoparkArray;
}

function countPrice(avtopark) {

    var price = 0;

    for (var a = 0; a < avtopark.length; a++) {

        price = price + avtopark[a].price;
    }

    return price;
}