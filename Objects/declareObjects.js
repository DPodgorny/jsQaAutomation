let sedan = require('../Classes/classSedan');
let minibus = require('../Classes/classMinibus');
let suv = require('../Classes/classSuv');

//Create car objects
let bmw525 = new sedan('Bmw 525', 200, 20000, 'red', 12, 280);
let mercedesVito = new minibus('Mercedes Vito', 180, 15000, 'silver', 15, 8);
let hondaCRV = new suv('Honda CR-V', 170, 13000, 'blue', 12, 'front');
let toyotaPrius = new sedan('Toyota Prius', 180, 14000, 'grey', 6, 200);
let volkswagenPolo = new sedan('Volkswagen Polo', 150, 10000, 'black', 9, 200);
let renaultDuster = new suv('Renault Duster', 150, 12000, 'black', 14, 'full');

module.exports = {bmw525, mercedesVito, hondaCRV, toyotaPrius, volkswagenPolo, renaultDuster};