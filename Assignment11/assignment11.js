const world = 7900;
// by function declaration
function percentageOfWorld1(population) {
    return (population / world) * 100;
}
const country1 = percentageOfWorld1(1441);
const country2 = percentageOfWorld1(1222);
const country3 = percentageOfWorld1(188);
console.log(country1, country2, country3);
// by function expressition
const percentageOfWorld2 = function (population) {
    return (population / world) * 100;
}
const china = percentageOfWorld2(1441);
const india = percentageOfWorld2(1222);
const bangladesh = percentageOfWorld2(188);
console.log(china, india, bangladesh);