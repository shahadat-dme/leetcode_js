var singleNumber = function(nums) {
    let res = 0
    for(let num of nums){
        res ^= num
    }
    return res
};

// const singleNumber = n => n.reduce((acc, cur) => acc ^ cur);