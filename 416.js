var canPartition = function(nums) {
    var reducer = nums.reduce((a, b) => a + b, 0);

    if (reducer % 2 !== 0) {
        return false;
    }
    var half = reducer / 2; 

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

console.log(canPartition([5,16,11,6,4,2]))  // true

console.log(canPartition([5,16,11,6,4,2,1])) //false

