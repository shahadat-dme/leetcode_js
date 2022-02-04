var findMaxLength = function(nums) {
    let map = {};
    let max = 0;
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? -1 : 1;
        if(sum === 0) {
            max = i + 1;
        }
        if(map[sum] !== undefined) {
            max = Math.max(max, i - map[sum]);
        } else {
            map[sum] = i;
        }
    }
    return max;
};