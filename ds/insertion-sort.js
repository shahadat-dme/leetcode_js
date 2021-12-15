function insertionSort(array) {
    // const arr = array.slice();
    for (let i = 1; i < array.length; i++){
        for (let j = i; j > 0; j--) {
            if(array[j] < array [j-1]) {
                // const temp = array[j];
                // array[j] = array[j-1];
                // array[j-1] = temp;
                [array[j],array[j-1]] = [array[j-1],array[j]];
            } else {
                break;
            }
        }
    }
    return array;
}

console.log(insertionSort([1,4,2,8,345,123,43,32]))