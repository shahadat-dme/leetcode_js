var splitArray = function (nums, m) {
    // Find min and max
    let low = Math.max(...nums);
    let high = nums.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
    let maxSum = 0;
    while (low <= high) {
      //   To prevent from overloading, because low and high can be large values
      const mid = Math.floor(low + (high - low) / 2);
  
      // Check for lowest possible values, if split is possible
      if (isSplitPossible(nums, mid, m)) {
        maxSum = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return maxSum;
  };
  
  var isSplitPossible = function (nums, mid, m) {
    let sum = 0;
    let pairCount = 1;
  
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      // Current sum exceeds
      if (sum > mid) {
        pairCount++;
        sum = nums[i];
      }
    }
    return pairCount <= m;
  };