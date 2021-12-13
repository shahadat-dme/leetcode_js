var maxPower = function(s) {
    let power = 1;
    let temp = 1;
    
    for(let i=0; i<s.length-1; i++) {
        if(s[i] === s[i+1]) {
            temp++
            power = Math.max(temp, power)
        } else {
            temp = 1
        }
    }
    
    return power;
};


// var maxPower = function(s) {
//     let power = 1
//     let temp = 1
    
//     for(let i=1; i<s.length; i++) {
//         if(s[i] === s[i-1]) {
//             temp++
//             power = Math.max(temp, power)
//         } else {
//             temp = 1
//         }
//     }
    
//     return power
// };

console.log(maxPower("leetcode"))
console.log(maxPower("ee"))
console.log(maxPower("abbcccddddeeeeedcba"))
console.log(maxPower("triplepillooooow"))
console.log(maxPower("tourist"))
console.log(maxPower("hooraaaaaaaaaaay"))