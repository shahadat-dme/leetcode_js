var summaryRanges = function(nums) {
    let i = 0, res = [];
    for (let j = 0; j < nums.length; j++) {
        if (nums[j+1] === nums[j] + 1) continue;
        else {
            if (i == j) res.push(nums[i] + "");
            else res.push( nums[i] + "->" + nums[j] );
            i = j + 1;
        }
    }
    return res;
};

const nums = summaryRanges([0,1,2,4,5,7])
console.log(nums);