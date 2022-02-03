var fourSumCount = function(A, B, C, D) {
    if (!A || !B || !C || !D) return [];
    // cuadratic solution... counter, reduced from sum_of_two
    let memory = new Map();
    for (let i of A) {
        for (let j of B) {
            memory.set(-(i + j), memory.get(-(i + j)) + 1 || 1);
        }
    }
    // look in the map if we have seen the complement of this sum
    let output = 0;
    for (let m of C) {
        for (let n of D) {
            output += memory.has(m + n)? memory.get(m + n): 0;
        }
    }
    return output;
};

/*
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let count = 0;
    let map = {};

    for(let num1 of nums1) {
        for(let num2 of nums2) {
            let sum = num1 + num2;
        
            if(map[sum] === undefined) {
                map[sum] = 1;
            } else {
                map[sum]++;
            }
        }
    }

    for(let num3 of nums3) {
        for(let num4 of nums4) {
            let target = -(num3 + num4) 
        
            if(map[target]) {
                count += map[target]
            }
        }
    }
    return count;
};
*/