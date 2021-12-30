/*
const smallestRepunitDivByK = (k) => {
    let remainder = 0;
    for (let i = 1; i < 1e6; i++) {
        remainder = (remainder * 10 + 1) % k;
        if (remainder == 0) return i;
    }
    return -1;
};

*/
/*
var smallestRepunitDivByK = function(k) {
    if( 1 > k > 1e6 ) return -1;
    let val = 0;
    for (let i = 1; i < 1e6; i++) {
        val = (val * 10 + 1) % k;
        if (val === 0) return i;
    }
    return -1;
};
*/


var smallestRepunitDivByK = (k) => {
    if(k / 2== 0 && k / 5 ==0) return -1;
    let previous =0;
    for(let i=1; i<= k;i++){
        previous = (previous * 10 +1) % k
        if(previous ==0) return i;
    }
    return -1;
};
