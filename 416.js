var canPartition = function(nums) {
    var add = nums.reduce((a, b) => a + b, 0);

    if (add % 2 !== 0) {
        return false;
    }
    var half = add / 2; 
    
    var dp = [];

    dp[0] = true;
    
    for (var i = 0; i < nums.length; ++ i) {
        var num = nums[i];
        for (var j = half; j >= num; -- j) {
            dp[j] = dp[j] || dp[j - num];
        }
    }
    
    return dp[half] || false;
};