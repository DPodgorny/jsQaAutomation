//Main class, describing car properties
class car {

    setModelName(value) {

        this.model = value;
    }

    setMaxSpeed(value) {

        this.maxSpeed = value;
    }

    setPrice(value) {

        this.price = value;
    }

    setColor(value) {

        this.color = value;
    }

    setConsumption(value) {
        this.consumption = value;
    }

}

//Inherited class, describing sedan properties
module.exports.sedan = class sedan extends car {

    setTrunkSize(value) {

        this.value = value;
    }
}

//Inherited class, describing minibus properties
module.exports.minibus = class minibus extends car {

    setPlaces(value) {

        this.value = value;
    }
}

//Inherited class, describing suv properties
module.exports.suv = class suv extends car {

    setWheelDrive(value) {

        this.WheelDrive = value;
    }
}