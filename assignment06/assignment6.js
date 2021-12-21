/*
const numNeighbour = prompt('How many neighbour countries does your coutry have?');
if (numNeighbour == 1) {
    console.log("Only one border!");
} else if (numNeighbour > 1) {
    console.log("More than one border!");
} else {
    console.log("No border!");
}
*/

const numNeighbour = Number(prompt('How many neighbour countries does your coutry have?'));
if (numNeighbour === 1) {
    console.log("Only one border!");
} else if (numNeighbour > 1) {
    console.log("More than one border!");
} else {
    console.log("No border!");
}
