function sumAll(arr){
    const min = arr[0] < arr[1] ? arr[0] : arr[1];
    const max = arr[0] > arr[1] ? arr[0] : arr[1];

    // let min, max;
    // if(arr[0] > arr[1]){
    //     max = arr[0]
    //     min = arr[1]
    // } else {
    //     max = arr[1]
    //     min = arr[0]
    // }


    let sum = 0;
    for (let i = min; i <= max; i++){
        sum += i
    }
    return sum;
}

// let sum = 0;
// for (let i = Math.min(...arr); i <= Math.max(...arr); i++){
//     sum += i
// }
// return sum;
// }


console.log(sumAll([1, 10]))
console.log(sumAll([10, 1]))