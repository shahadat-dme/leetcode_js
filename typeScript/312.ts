function maxCoins(nums: number[]): number {
    if (!nums.length) {
        return 0
    }
    let dp: number[][] = new Array(nums.length).fill(0).map(() => new Array(nums.length).fill(0))

    function recurse(length: number) {
        if (length > nums.length) {
            return
        }
        let i = 0
        let j = length

        while (j <= nums.length) {
            let max = 0
            for (let k = i; k < j; k++) {
                
                let totalBefore = 0;
                if (k - 1 >= i) {
                    // add left
                    totalBefore += dp[i][k-1]
                }

                if (k + 1 <= j -1) {
                    // add right
                    totalBefore += dp[k+1][j-1]
                }
                // k is the last to burst
                let left = nums[i-1] || 1
                let right = nums[j] || 1

                max = Math.max(max,totalBefore + (left * nums[k] * right))
            }
            dp[i][j-1] = max
            i++
            j++
        }
        recurse(length + 1)
    }

    recurse(1)

    return dp[0][nums.length -1]
};