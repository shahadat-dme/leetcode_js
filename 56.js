var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    
    let previous = intervals[0];
    let result = [previous];
    
    for (let i = 1; i < intervals.length; i++) {
        current = intervals[i];
        if (current[0] <= previous[1]) previous[1] = Math.max(previous[1], current[1]);
        else {
            result.push(current);
            previous = current;
        }
    }
    
    return result;
};



console.log(merge([[1,4],[4,5]]))
console.log(merge([[1,3],[2,6],[8,10],[15,18]]))