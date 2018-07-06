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

class sedan extends car {

    setTrunkSize(value) {

      this.value = value;
    }
}

class minibus extends car {

    setPlaces(value) {

        this.value = value;
    }
}

class suv extends car {

    setWheelDrive(value) {
        this.WheelDrive = value;
    }
}


function setCarProperties(carObject, model, maxSpeed, price, color, consumption, changeableVar) {

    carObject.setModelName(model);
    carObject.setMaxSpeed(maxSpeed);
    carObject.setPrice(price);
    carObject.setColor(color);
    carObject.setConsumption(consumption);

    if (carObject instanceof sedan) {

        carObject.setTrunkSize(changeableVar);
    }

    else if (carObject instanceof minibus) {

        carObject.setPlaces(changeableVar);
    }
    else if (carObject instanceof suv) {
        carObject.setWheelDrive(changeableVar);
    }
}

bmw525 = new sedan();
mercedesVito = new minibus();
hondaCRV = new suv();
toyotaPrius = new sedan();
volkswagenPolo = new sedan();
renaultDuster = new suv();

setCarProperties(bmw525, 'Bmw 525', 200, 20000, 'red', 12, 280);
setCarProperties(mercedesVito, 'Mercedes Vito', 180, 15000, 'silver', 15, 8);
setCarProperties(hondaCRV, 'Honda CR-V', 170, 13000, 'blue', 12, 'front');
setCarProperties(toyotaPrius, 'Toyota Prius', 180, 14000, 'grey', 6, 200);
setCarProperties(volkswagenPolo, 'Volkswagen Polo', 150, 10000, 'black', 9, 200);
setCarProperties(renaultDuster, 'Renault Duster', 150, 12000, 'black', 14, 'full');

avtopark = [bmw525, mercedesVito, hondaCRV, toyotaPrius, volkswagenPolo, renaultDuster];

function compareConsumption(car1, car2) {

    return car1.consumption - car2.consumption;
}

avtopark = avtopark.sort(compareConsumption);

var carsList = [];
var overalPrice = 0;

for (var a = 0; a<avtopark.length; a++) {

    carsList[a] = avtopark[a].model;
    overalPrice = overalPrice + avtopark[a].price;
}

console.log('Sorted list of cars (by consumption) ' + carsList +'/n');
console.log('Overall price ' + overalPrice + 'USD');

