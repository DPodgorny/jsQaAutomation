sedan = require('./Classes/classSedan');
minibus = require('./Classes/classMinibus');
suv = require('./Classes/classSuv');
processList = require('./Functions/processAvtopark');
readline = require('readline-sync');

//Create car objects
bmw525 = new sedan('Bmw 525', 200, 20000, 'red', 12, 280);
mercedesVito = new minibus('Mercedes Vito', 180, 15000, 'silver', 15, 8);
hondaCRV = new suv('Honda CR-V', 170, 13000, 'blue', 12, 'front');
toyotaPrius = new sedan('Toyota Prius', 180, 14000, 'grey', 6, 200);
volkswagenPolo = new sedan('Volkswagen Polo', 150, 10000, 'black', 9, 200);
renaultDuster = new suv('Renault Duster', 150, 12000, 'black', 14, 'full');

//Create avtopark array
var avtopark = [bmw525, mercedesVito, hondaCRV, toyotaPrius, volkswagenPolo, renaultDuster];


//Part 1: Sort avtopark depending on consumption
var avtoparkSorted = processList.sortCars(avtopark);

console.log('\nSorted list of cars (by consumption):\n');
for (var a = 0; a < avtoparkSorted.length; a++)
{
    console.log(avtoparkSorted[a].modelName + ' ' + avtoparkSorted[a].consumption + ' litres');
}


//Part 2: Count overal price of avtopark
var sumPrice = processList.countPrice(avtopark);
console.log('\nOverall price: ' + sumPrice + 'USD');


//Part 3: Filter avtopark depending on entered params
processList.startFiltering(avtoparkSorted);



