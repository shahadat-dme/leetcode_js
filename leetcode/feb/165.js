// var compareVersion = function(version1, version2) {
//     version1 = version1.split('.');
//     version2 = version2.split('.');
    
//     let len = Math.max(version1.length, version2.length);
    
//     for(let i = 0; i < len; i++) {
//         let num1 = (Number(version1[i]) || 0);
//         let num2 = (Number(version2[i]) || 0);
        
//         if(num1 < num2) return -1;
//         else if(num1 > num2) return 1;
//     }
//     return 0;
// };


var compareVersion = function (version1, version2) {
    //converting into array by splitting at .
    version1 = version1.split('.');
    version2 = version2.split('.');
    // Finding the max length of either array
    let length = Math.max(version1.length, version2.length);

    // Iterate over the length
    for (let i = 0; i < length; i++) {
        /* 
        If any array is smaller so its i index will return undefined and we can use || i.e undefined || 0 to return 0
		
		P.S. Our array is of string numbers i.e typeof version1[i] ="string" so + version1[i]
		will convert the string to      number. It is a shorthand of parseInt(version1[i])  
		[Read more about + here](http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
        */
        if ((+version1[i] || 0) < (+version2[i] || 0)) return -1;
        if ((+version1[i] || 0) > (+version2[i] || 0)) return 1;
    }
    return 0;
};

const verstionDef= compareVersion("1.01","1.001")
console.log(verstionDef);

const verstionDef2= compareVersion("0.1","1.1")
console.log(verstionDef2);

// var compareVersion = function (version1, version2) {
//     version1 = version1.split('.');
//     version2 = version2.split('.');
//     let length = Math.max(version1.length, version2.length);
//     for (let i = 0; i < length; i++) {
//         if ((+version1[i] || 0) < (+version2[i] || 0)) return -1;
//         if ((+version1[i] || 0) > (+version2[i] || 0)) return 1;
//     }
//     return 0;
// };