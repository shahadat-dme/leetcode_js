// var sortArrayByParity = function(nums) {
//     const even = nums.filter(num => num % 2 === 0);
//     const odd = nums.filter(num => num % 2 !== 0);
//     return even.concat(odd);
// };


var sortArrayByParity = function(nums) {
    return [...nums.filter(v => v % 2 === 0), ...nums.filter(v => v % 2 !== 0)];
};