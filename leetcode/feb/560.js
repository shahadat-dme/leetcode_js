var subarraySum = function(nums, k) {
    let map = new Map();
	map.set(0, 1);
    
    let sum = 0;
    let count = 0;
    
    for(let num of nums) {
        sum += num;
        
        if(map[sum - k]) {
            count += map[sum - k];
        } 
        map[sum] = (map[sum] || 0) + 1;
    }
    return count;
};