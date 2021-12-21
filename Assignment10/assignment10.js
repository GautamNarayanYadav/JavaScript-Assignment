'use strict'
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} millions people and its capital city is ${capitalCity}`;
}
const firstCountry = describeCountry('Finland', 6, 'Helsinki');
const secondCountry = describeCountry('India', 12, 'Patna');
const thirdCountry = describeCountry('Nepal', 2, 'Kathmandu');
console.log(firstCountry, secondCountry, thirdCountry);