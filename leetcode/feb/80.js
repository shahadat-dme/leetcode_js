var removeDuplicates = function(nums) {
    let curr = 2;
    
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[curr - 2]) {
            nums[curr] = nums[i];
            curr++;
        }
    }
    
    return curr;
};

/*
var removeDuplicates = function(nums) {
    
    for(let i = 2; i < nums.length; i++) {
        if(nums[i-2] === nums[i]) {
            nums.splice(i, 1);
            i--;
        }
    }
};
*/