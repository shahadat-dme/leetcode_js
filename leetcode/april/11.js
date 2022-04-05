var maxArea = function(heights) {
    let l = 0, r = heights.length-1;
    let max = 0;
    while (l < r) {
        let container = (r-l)*Math.min(heights[l], heights[r]);
        max = Math.max(max, container);
        (heights[l] < heights[r]) ? l++ : r--
    }
    return max;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};