function quickSort(arr) {
    if (arr.length <= 2) return arr;

    const base = arr[0];
    const lessArr = [];
    const greaterArr = [];
    const excludedArray = arr.slice(1);
    for (let i = 0; i < excludedArray.length; i++) {
        if (excludedArray[i] <= base) {
            lessArr.push(excludedArray[i])
        }
        if (excludedArray[i] > base) {
            greaterArr.push(excludedArray[i])
        }
    }
    return [...quickSort(lessArr), base, ...quickSort(greaterArr)];
}

console.log(quickSort([10,5,2,3, 123, 17, 20]));