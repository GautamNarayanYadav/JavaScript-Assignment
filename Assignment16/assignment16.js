/*for (let men = 1; men <= 50; men++) {
    console.log(`Voter number ${men} is currently voting`);
}
*/
function percentageOfWorld(population) {
    return (population / 7900) * 100;
}
const percentages = [percentageOfWorld(1222), percentageOfWorld(1444), percentageOfWorld(188)];
console.log(percentages);
const percentages2 = []
for (i = 0; i < percentages.length; i++) {
    percentages2.push(percentages[i]);
}
console.log(percentages2);

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];
for (i = 0; i < listOfNeighbours.length; i++)
    for (y = 0; y < listOfNeighbours[i].length; y++)


        console.log(`Neighbour:${listOfNeighbours[i][y]}`);