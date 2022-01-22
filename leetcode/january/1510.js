var winnerSquareGame = function(n) {
    
    const map = new Map();
    map.set(0, false);
    map.set(1, true);
    
    const dfs = (num) => {
        if( map.has(num) ) return map.get(num);
        let sqRoot = Math.floor(Math.sqrt(num));
        
        for(let i=1; i<=sqRoot; i++){
            if( !dfs(num - (i*i)) ) {
                map.set(num, true);
                return true;
            }    
        }
        map.set(num, false);
        return false;
    }
    
    return dfs(n)
};
console.log(winnerSquareGame(1))
console.log(winnerSquareGame(2))
console.log(winnerSquareGame(4))