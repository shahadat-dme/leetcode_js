var subarraySum = function(nums, k) {
    let sum = 0; 
    let hash = new Map()
    hash.set(0,1)
    let count = 0
    
    for(let num of nums){
        sum += num
        if(hash.has(sum - k)){
        count += hash.get(sum-k)
        }
        hash.set(sum, (hash.get(sum) || 0) + 1)
    }
    
    return count
};