var maximumUniqueSubarray = function(nums) {
    let a = new Int8Array(10001), sum = max = 0, len = nums.length
    for (let l = 0, r = 0; r < len; r++) {
        a[nums[r]]++, sum += nums[r]
        while (a[nums[r]] > 1) a[nums[l]]--, sum -= nums[l++]
        max = sum > max ? sum : max
    }
    return max;
};

const Arr = maximumUniqueSubarray([4,2,4,5,6])
const Arr2 = maximumUniqueSubarray([5,2,1,2,5,2,1,2,5])
console.log(Arr, Arr2);