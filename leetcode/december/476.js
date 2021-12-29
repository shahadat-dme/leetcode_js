// var findComplement = function(num) {
//     var n = 2;
//     while (n <= num) n *= 2;
//     return num ^ (n - 1);
// }

/*
var findComplement = function(num) {

//converting decimal to binary
   var bin = num.toString(2);
    
	//binary 1's complement (0 changed to 1; 1 changed to 0)
    let complement =  bin.replace(/./g, function (c) { return { '0': '1', '1': '0' }[c];});
	
	//finally, binary to decimal returns
    return parseInt(complement,2);
};

*/

/*
var findComplement = function (num) {
  return ~num & ((1 << num.toString(2).length) - 1)
}
*/

var findComplement = function(num) {
    var result = 0;
    var i = 0;
    while(num > 0){
        if(num %2== 0)
        {
            result += Math.pow(2,i);
        }
        num = parseInt(num/2);
        i++;
    }
    return result;
};

console.log(findComplement(5))