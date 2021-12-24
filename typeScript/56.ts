function merge(intervals: number[][]): number[][] {    
    const mergedList = []
    
    // sort (not sure if all interval lists will be sorted)
    const sorted = intervals.sort((a, b) => a[0] - b[0])
    
    for (let i = 0; i < sorted.length; i++) {
        if (mergedList.length <= 0 || mergedList[mergedList.length - 1][1] < sorted[i][0]) {
            mergedList.push(sorted[i])
        } else {
            const lastMergedEl = mergedList[mergedList.length - 1]
            lastMergedEl[1] = Math.max(lastMergedEl[1], sorted[i][1])
        }
    }
    
    return mergedList
};

console.log(merge([[1,4],[4,5]]))
console.log(merge([[1,3],[2,6],[8,10],[15,18]]))