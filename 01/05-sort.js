const months = ['March', 'Jan', 'Feb', 'Dec'];
console.log(months.sort());
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
console.log(array1.sort());
// expected output: Array [1, 100000, 21, 30, 4]

const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);
// [1, 2, 3, 4, 5]
