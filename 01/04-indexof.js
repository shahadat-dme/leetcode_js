const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison',2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

let text = "Hello world, welcome to the universe.";
let result = text.indexOf("welcome");
console.log(result);