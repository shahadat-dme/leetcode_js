var numberOfArithmeticSlices = function(nums) {
    let ret = 0;
for (let i = 2, prev = nums[1] - nums[0], curCount = 0; i < nums.length; ++i) {
    const diff = nums[i] - nums[i - 1];
    diff === prev ? (ret += ++curCount) : (prev = diff, curCount = 0);
}
return ret;
};