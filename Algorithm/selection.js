const findMin = require('./findMin');

function selectionSort(arr) {
    const sortedArr = [];
    let basedArr = [...arr];

    for (let i = 0; i < arr.length; i++) {
        const minIndex = findMin(basedArr)
        const minValue = basedArr[minIndex];
        sortedArr.unshift(minValue);
        basedArr = basedArr.filter((value, index) => index !== minIndex);
    }

    return sortedArr;
}

console.log(selectionSort([12, 3, 4, 99, -13, 466, 500]));