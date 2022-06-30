var minMoves2 = function(nums) {
    nums.sort((a,b)=>a-b);
    let count = 0;
    let j = 0;
    for (let i = nums.length-1; i>=nums.length/2; i--){
        count+=nums[i]-nums[j];
        j++;
    }
    return count;
};