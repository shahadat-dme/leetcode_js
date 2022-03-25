var twoCitySchedCost = function(costs) {
    costs.sort((a,b) => a[0] - a[1] - (b[0] - b[1]))
    let sum = 0
    for(let i=0; i<costs.length; i++){
        if(i < Math.floor(costs.length/2))  sum += costs[i][0]
        else    sum += costs[i][1]
    }
    return sum
};


// const twoCitySchedCost = function(costs) {
//     let sortedByCostDiff = costs.sort((a,b)=>a[0]-a[1]-(b[0]-b[1]));
//     let cost = 0;
//     let halfway = sortedByCostDiff.length/2;
    
//     for(let i = 0; i < halfway; i++){   
//         cost+=sortedByCostDiff[i][0]+sortedByCostDiff[halfway+i][1];
//     }
    
//     return cost;
// };