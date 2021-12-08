var getDecimalValue = function(head) {
    const arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return parseInt(arr.join(''), 2);
};

// var getDecimalValue = function(head) {
//     let str = '', temp = head;
    
//     while( temp ) {
//         str += temp.val;
//         temp = temp.next;
//     }
    
//     return parseInt( str, 2);
// };



// var num = 10;

// console.log("Binary " + num.toString(2));   // 1010
// alert("Octal " + num.toString(8));    // 12
// alert("Hex " + num.toString(16));     // a

// alert("Binary to Decimal " + parseInt("1010", 2));  // 10
// alert("Octal to Decimal " + parseInt("12", 8));     // 10
// alert("Hex to Decimal " + parseInt("a", 16));       // 10

