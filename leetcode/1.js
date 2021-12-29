var twoSum = function (nums, target) {
    // Loop through the numbers
    for (var i = 0; i < nums.length; i++) {
        // Determine the complement (required number) for the current number
        const complement = target - nums[i];

        // Loop through the array again
        for (var x = 0; x < nums.length; x++) {
            // Check if the current number is the first number's complement (and is not the same as the first number)
            if (x != i && nums[x] == complement) {
                // Return both numbers
                return [i, x];
            }
        }
    }
};

// This part never submit leetcode
console.log(twoSum([2, 7, 11, 15], 9)); // Outputs: [0, 1]