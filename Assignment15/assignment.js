"use strict"
//introduction to objects
const myCountry = {
    country: 'india',
    capital: 'new delhi',
    language: 'Hindi',
    population: 122,
    neighbours: ['nepal', 'pakistan', 'china'],
    describe: function () {
        console.log(
            `${this.country} has ${this.population} million ${this.language}-speaking people,${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);

    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};

//dot vs. bracket notation
//console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);
//object methodd
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);