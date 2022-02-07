// var removeDuplicates = function (nums) {
//     var i = 0;
//     nums.forEach(function (element) {
//         if (element !== nums[i]) {
//             nums[++i] = element;
//         }
//     });
//     return nums.length && i + 1;
// };

/*
var removeDuplicates = function(nums) {
    for (i = 0; i < nums.length; i++) {
        //Next number is identical to current one
        if (nums[i] == nums[i+1]) {
            nums.splice(i, 1);
            i--;
        }
    }
};
*/

/*
var removeDuplicates = function(nums) {
    let uniqueNums = new Map();
    
    let count = 0;
    for (let x = 0; x < nums.length; x++) {
        if (!uniqueNums.has(nums[x])) {
            nums[count] = nums[x];
            uniqueNums.set(nums[count], 1)
            count++;
        }
    }
    
    return count;
};
*/

var removeDuplicates = function(nums) {
    let j = 1;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] !== nums[j - 1]) {
			nums[j] = nums[i];
			j += 1;
		}
	}
	return j;
}
let unique = removeDuplicates([1,1,2])
console.log(unique);