var subsets = function(nums) {
    let tempDataStruct = []
    let result = []
    let index = 0
    
    function backtracking(stack, index) {
        result.push([...stack])
        
        for(let i = index; i < nums.length; i++) {
            stack.push(nums[i])
            backtracking(stack, i + 1)
            stack.pop();
        }
    }
    backtracking(tempDataStruct, index)
    return result;
};