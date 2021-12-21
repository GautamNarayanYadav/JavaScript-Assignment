const neighbours = ['nepal', 'bangladesh', 'china'];
console.log(neighbours);
neighbours.push('pakistan');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (neighbours.includes('Germany')) {

} else console.log('probably not a central country:D');
neighbours[neighbours.indexOf('nepal')] = 'bhai bhai nepal';
console.log(neighbours);