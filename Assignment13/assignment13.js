
const populations = [122, 120, 111, 188];
const percentageOfWorld5 = populations => (populations / 7900) * 100;
const collection = [
    percentageOfWorld5(populations[0]),
    percentageOfWorld5(populations[1]),
    percentageOfWorld5(populations[2]),
    percentageOfWorld5(populations[3])
];
console.log(collection);
