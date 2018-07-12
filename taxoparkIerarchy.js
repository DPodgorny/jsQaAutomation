let processList = require('./Functions/processAvtopark');
let objects = require('./Objects/declareObjects');


//Create avtopark array
let avtopark = [objects.bmw525, objects.mercedesVito, objects.hondaCRV, objects.toyotaPrius, objects.volkswagenPolo, objects.renaultDuster];


//Part 1: Sort avtopark depending on consumption
let avtoparkSorted = processList.sortCars(avtopark);

console.log('\nSorted list of cars (by consumption):\n');
for (let a = 0; a < avtoparkSorted.length; a++)
{
    console.log(avtoparkSorted[a].modelName + ' ' + avtoparkSorted[a].consumption + ' litres');
}


//Part 2: Count overal price of avtopark
let sumPrice = processList.countPrice(avtopark);
console.log('\nOverall price: ' + sumPrice + 'USD');


//Part 3: Filter avtopark depending on entered params
processList.startFiltering(avtoparkSorted);



