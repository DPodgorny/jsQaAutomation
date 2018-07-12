module.exports.sortCars = sortCars;
module.exports.countPrice = countPrice;
module.exports.startFiltering = startFiltering;

//Part 1: Sort list of cars by consumption
function sortCars(avtoparkArray) {

    function compareConsumption(car1, car2) {

        return car1.consumption - car2.consumption;
    }

    avtoparkArray = avtoparkArray.sort(compareConsumption);

    return avtoparkArray;
}

//Part 2: Count overal price of avtopark
function countPrice(avtopark) {

    var price = 0;

    for (var a = 0; a < avtopark.length; a++) {

        price = price + avtopark[a].price;
    }

    return price;
}


//Part 3: Filter avtopark

//Ask wether filtering required
function startFiltering(avtoparkArray) {

    var requireSelect = readline.question('Do you want to filter avtopark? y/n \n');

    if (requireSelect === 'y') {

        filter(avtoparkArray);

    } else if (requireSelect === 'n') {

        console.log('Exiting...')

    } else {

        console.log('Wrong choise, try again')
        startFiltering(avtoparkArray);
        return;

    }
}

//Filter list depending on parameter
function filter(avtoparkArray) {

    var filterParam = readline.question('Select parameter for filtering: \n1. By max speed \n2. By price \n3. By consumption\n');
    var unit;

    switch (filterParam) {

        case '1':
           filterParam = 'maxSpeed';
           break;

        case '2':
            filterParam = 'price';
            break;

        case '3':
            filterParam = 'consumption';
            break;

        default:
            console.log('\nWrong choise. Try again\n');
            filter(avtoparkArray);
            return;
            break;
    }

    var minValue = readline.question('Enter min value \n');
    var maxValue = readline.question('Enter max value \n');

    var filteredAvtopark = [];

    for (var a = 0; a < avtoparkArray.length; a++) {

        if (avtoparkArray[a][filterParam] >= minValue) {

            if (avtoparkArray[a][filterParam] <= maxValue) {

                filteredAvtopark.push(avtoparkArray[a]);
            }
        }
    }

    continueFiltering(filteredAvtopark, filterParam);

}

//Ask wether future filtering required
function continueFiltering(filteredAvtopark, filterParam) {

    var continueCheck = readline.question('Do you want to select more params? y/n ');

    if (continueCheck === 'y') {

        filter(filteredAvtopark);
        return;

    } else if (continueCheck === 'n') {

        console.log('Filtered avtopark \n');

        if(filteredAvtopark.length === 0) {

            console.log('No results found');
            return;
        }

        for (var a = 0; a < filteredAvtopark.length; a++)
        {
            console.log(filteredAvtopark[a].modelName);
        }
        return;

    } else {

        console.log('Wrong chose. Try again\n')
        continueFiltering(filteredAvtopark);
        return;
    }
}