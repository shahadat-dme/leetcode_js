// let longestCommonPrefix = function(strs) {
//     if (strs.length == 0){
//        return "" 
//     }
    
//     let prefix = strs[0]
//     for(let i = 1; i < strs.length; i++) {
//         while(strs[i].indexOf(prefix) != 0) {
//             prefix = prefix.substring(0, prefix.length - 1)
//             if (prefix == 0){
//                 return "" 
//             }
//         }
//     }
//     return prefix   
// };


var longestCommonPrefix = function (strs) {
    let prefix = ''
    if ( strs.length === 0) return prefix
    for (let i = 0; i < strs[0].length; i++){
        const ch = strs[0][i]
        for (let j = 0; j < strs.length; j++){
            if (strs[j][i] !== ch) return prefix
        }
        prefix = prefix + ch
    }
    return prefix
}

/*
var longestCommonPrefix = function(strs) {
    let prefix = ""
    if(strs === null || strs.length === 0) return prefix

    for (let i=0; i < strs[0].length; i++){ 
        const char = strs[0][i] // loop through all characters of the very first string. 

        for (let j = 1; j < strs.length; j++){ 
          // loop through all other strings in the array
            if(strs[j][i] !== char) return prefix
        }
        prefix = prefix + char
    }

    return prefix
}
*/

// console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))