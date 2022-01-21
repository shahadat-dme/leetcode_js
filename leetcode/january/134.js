var canCompleteCircuit = function(gas, cost) {
    let cand = 0, curr = 0, total = 0;
    for(let i=0; i<gas.length; i++){
        curr += gas[i] - cost[i];
        total += gas[i] - cost[i];
        if(curr < 0){
            cand = i+1;
            curr = 0;
        }
    }
    return total >= 0 ? cand : -1;
};