var countBits = function(n) {
    
    // Base case
    // 0 = 0b 0
    dp = [0]
    
    // General cases:
    for(let i = 1 ; i <= n ; i++ ){
        
        // Even number
        // i = ( i / 2) << 1 + 0 = ( i / 2) << 1 | 0

        // Odd number
        // i = ( i / 2) << 1 + 1 = ( i / 2) << 1 | 1
        
        const half = parseInt( i / 2 );
        dp.push( dp[ half ] + (i & 1) ); 
        
    }
    return dp
};

const bit = countBits(2)
// const bit = countBits(7)
// const bit = countBits(12)
console.log(bit);