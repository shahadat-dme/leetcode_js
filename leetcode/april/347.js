var topKFrequent = function(nums, k) {
    let map = {};
    
    for(let num of nums) {
        if(!map[num]) map[num] = 1;
        else map[num]++;
    }
    
    let sorted = Object.keys(map).sort((a,b) => {
        return map[b] - map[a];
    });
    
    return sorted.slice(0, k);
};