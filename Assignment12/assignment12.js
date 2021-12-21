/*const world = 7900;
const percentage = population => (population / world) * 100;
console.log(percentage(1444), percentage(1222), percentage(188));
;*/
//: Functions Calling Other Functions

//const percentageOfWorld3 = population => (population / 7900)
//* 100;
function percentageOfWorld3(population) {
    return (population / 7900) * 100;
}
const describePopulation = function (country, population) {
    const percentage = percentageOfWorld3(population);
    return `${country} has ${population} million people, 
    which is about ${percentage} % of the world.`;
};
console.log(describePopulation('china', 1444), describePopulation('india', 1222), describePopulation('bangladesh', 188));