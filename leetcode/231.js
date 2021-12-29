// var isPowerOfTwo = function(n) {
//     if(n === 0) return false;
//     while(n % 2 === 0){
//         n/=2;
//     }
//     return n === 1;
// };

let isPowerOfTwo = n => n > 0 ? !(n & n-1) : false;

// var isPowerOfTwo = function(n) {
//     if( n == 0){
//         return false
        
//     }
//     if(n == 1){
//         return true
//     }
    
//     return isPowerOfTwo(n/2)
// };
console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(3))