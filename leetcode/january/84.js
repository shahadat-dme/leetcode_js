var largestRectangleArea = function(heights) {
    // to deal with last element without going out of bound
    heights.push(0)
    const stack = [];
    let maxArea = 0, curr, currH, top, topH, area;
    
    for(let i = 0; i < heights.length; i++) {
        top = stack[stack.length-1];
        topH = heights[top];
        // pop from stack as long as the top of the stack
        // is greater than the current height and
        // the stack has at least 2 items
        while(stack.length > 1 && topH > heights[i]) {
            curr = stack.pop();
            currH = heights[curr];
            top = stack[stack.length-1];
            topH = heights[top];
            area = currH * (i - 1 - top);
            maxArea = Math.max(area, maxArea);
        }
        
        // when only 1 item left in the stack
        if(stack.length && topH > heights[i]) {
            curr = stack.pop();
            currH = heights[curr];
            area = currH * i;
            maxArea = Math.max(area, maxArea);
        }
        stack.push(i);
    }
    return maxArea;
};
/*
var largestRectangleArea = function(heights) {
    const stack = [-1];
    let res = 0;
    heights.push(0);
    for(let i in heights){
        while(heights[stack[stack.length-1]]>heights[i]){
            const ceilIndex = stack.pop();
            const leftIndex = stack[stack.length-1];
            res = Math.max(res, (i-leftIndex-1)*heights[ceilIndex]);
        }
        stack.push(i);
    }
    return res;
};
*/