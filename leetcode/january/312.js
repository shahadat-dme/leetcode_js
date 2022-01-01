var maxCoins = function(nums) {
    const n = nums.length;

   nums.unshift(1);
   nums.push(1);
   
   const dp = Array.from(Array(n + 2), () => Array(n + 2).fill(0));
   for (let len = 1; len <= n; len++) {
       for (let start = 1; start + len - 1 <= n; start++) {
           const end = start + len - 1;
           
           let max = 0;
           for (let i = start; i <= end; i++) {
               const points = (
                   nums[start - 1] * nums[i] * nums[end + 1] +
                   dp[start][i - 1] +
                   dp[i + 1][end]
               );
               if (points > max) {
                   max = points;
               }
           }
           dp[start][end] = max;
       }
   }
   return dp[1][n];
};
console.log(maxCoins([3,1,5,8]))
console.log(maxCoins([1,5]))