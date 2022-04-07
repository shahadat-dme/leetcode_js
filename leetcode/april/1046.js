var lastStoneWeight = function(stones) {
    while(stones.length>1){
        stones.sort((a,b)=>b-a);
        if(stones[0]===stones[1]){stones.splice(0,2)}
        else{stones[0]-=stones[1]; stones.splice(1,1);}
    }
    if(stones[0]==undefined){return 0;}
    return stones[0];
};