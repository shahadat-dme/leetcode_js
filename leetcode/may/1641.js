// var countVowelStrings = function(n) {
//     return (n+1) * (n+2) * (n+3) * (n+4) / 24;
// };


// var countVowelStrings = function(n) {
//     function count(n, char) {
//         if (n === 0) {
//             return 1;
//         }
        
//         let sum = 0;
        
//         while (char <= 5) {
//             sum += count(n - 1, char);
//             char++;
//         }
            
//         return sum;
//     }
    
//     return count(n, 1);
// };


var countVowelStrings = function(n) {
    let prevDP = new Array(5).fill(0); 
    
    prevDP[0] = 1;
    
    for (let i = 1; i <= n; i++) {
        const nextDP = new Array(6).fill(0);
        
        let sum = 0; 
        
        for (let j = 0; j < 5; j++) {
            sum += prevDP[j];
            
            nextDP[j] = sum;
        }
        
        prevDP = nextDP;
    }
    
    let sum = prevDP.reduce((acc, num) => acc + num, 0);
    
    return sum;
};
