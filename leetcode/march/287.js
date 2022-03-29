var findDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let abs = Math.abs(nums[i]);
        if (nums[abs] < 0) return abs;
        else nums[abs] *= -1;
    }
    // Time Complexity: O(n)
    // Space Complexity: O(1)
}