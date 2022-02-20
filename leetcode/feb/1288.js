var removeCoveredIntervals = function(intervals) {
    intervals.sort((a,b) => {
        if (a[0] == b[0]) return b[1]-a[1];
        else return a[0]-b[0];
    });
    let remove = 0;
    for (let i = 0; i < intervals.length-1; i++) {
        if (intervals[i][1] >= intervals[i+1][1]) {
            remove++;
            intervals[i+1] = intervals[i];
        }
    }
    return intervals.length-remove;
    // Time Complexity: O(nlog(n))
    // Space Complexity: O(1)
};