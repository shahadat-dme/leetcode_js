var rotate = function(nums, k) {
    const rotations = k % nums.length;
    const right = nums.splice(nums.length - rotations, nums.length);
    nums.unshift(...right);
};

/*
var rotate = function(nums, k) {
    let first = k % nums.length;
    nums.unshift(...nums.splice(-first));
    return nums;
};
*/