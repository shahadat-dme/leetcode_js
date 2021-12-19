var decodeString = function(s) {
    let mul = [], repeatStr=[], res="", num="";
   for(let char of s){
       if(!isNaN(char)){
        num += char; 
       }
       else if(char === "["){
        mul.push(num);
        num = "";
        repeatStr.push(res);
        res = "";
    }
       else if(char === "]"){
        res = repeatStr.pop() + res.repeat(mul.pop()); 
       }
       else{
        res+=char;
       }
   }
    return res;
};


// var decodeString = function(s) {
//     while(s.indexOf('[')!=-1) { // base case, breaks when there's no bracket found
//         let left = s.lastIndexOf('['); // left position of the inner-most `[`
//         let right = left + s.substring(left).indexOf(']'); // right positio of the inner-most `]`
//         let word = s.substring(left+1, right); // between them is the string
//         let count = "";
//         while(s[left-1] >= 0 && s[left-1]<=9) { // try to find a valid number
//             left--;
//             count = s[left] + count;
//         }
//         s = s.substring(0,left) + word.repeat(count) + s.substring(right+1); // put them all togher and repeat :)
//     }
//     return s;
// };

console.log(decodeString("3[a]2[bc]"))
console.log(decodeString("3[a2[c]]"))
console.log(decodeString("2[abc]3[cd]ef"))
console.log(decodeString("abc3[cd]xyz"))