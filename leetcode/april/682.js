var calPoints = function(ops) {
    const res = [];
    const len = ops.length;
    for(let i =0; i<len; i++){
        if(ops[i]-"0") res.push(ops[i]-"0")
        else if(ops[i]==='C') res.pop()
        else if(ops[i]==='D') res.push(2*(res[res.length-1]))
        else if(ops[i]==='+') res.push(res[res.length-1]+res[(res.length-1)-1])
    }
    return res.reduce((x,y)=>x+y)
};