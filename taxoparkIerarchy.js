cars = require('./classDeclares');
processList = require('./processAvtopark');

//Create car objects
bmw525 = new cars.sedan();
mercedesVito = new cars.minibus();
hondaCRV = new cars.suv();
toyotaPrius = new cars.sedan();
volkswagenPolo = new cars.sedan();
renaultDuster = new cars.suv();

//Fill car objects propeties
processList.setCarProperties(bmw525, 'Bmw 525', 200, 20000, 'red', 12, 280);
processList.setCarProperties(mercedesVito, 'Mercedes Vito', 180, 15000, 'silver', 15, 8);
processList.setCarProperties(hondaCRV, 'Honda CR-V', 170, 13000, 'blue', 12, 'front');
processList.setCarProperties(toyotaPrius, 'Toyota Prius', 180, 14000, 'grey', 6, 200);
processList.setCarProperties(volkswagenPolo, 'Volkswagen Polo', 150, 10000, 'black', 9, 200);
processList.setCarProperties(renaultDuster, 'Renault Duster', 150, 12000, 'black', 14, 'full');

//Create avtopark array
var avtopark = [bmw525, mercedesVito, hondaCRV, toyotaPrius, volkswagenPolo, renaultDuster];

var avtoparkSorted = processList.sortCars(avtopark);

console.log('\nSorted list of cars (by consumption):\n');
for (var a = 0; a < avtoparkSorted.length; a++)
{
    console.log(avtoparkSorted[a].model + ' ' + avtoparkSorted[a].consumption+' litres');
}

var overalPrice = processList.countPrice(avtopark);
console.log('\nOverall price: ' + overalPrice + 'USD');