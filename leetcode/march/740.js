var deleteAndEarn = function(nums) {
    
    let max = Number.NEGATIVE_INFINITY
    
    for(let ctr = 0 ; ctr < nums.length ; ctr ++)
        max = Math.max(nums[ctr],max);
    
    let arr = new Array(max+1).fill(0);
    
    for(let ctr = 0 ; ctr < nums.length ; ctr ++)
        arr[nums[ctr]] += 1
    
    let dp = new Array(arr.length).fill(-1)
    
    dp[arr.length]   = 0 ;
    dp[arr.length+1] = 0 ;
    
    for(let ctr = arr.length - 1 ; ctr >= 0 ; ctr --) {
        dp[ctr] = Math.max(dp[ctr+1],arr[ctr]*ctr + dp[ctr+2])
    }
    
    return dp[0]
    
};