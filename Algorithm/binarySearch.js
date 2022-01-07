function binarySearch(list, item) {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        let middle = Math.floor((low + high) / 2);
        let guess = list[middle];
        if (guess === item) {
            return middle;
        }
        if (guess > item) {
            high = middle - 1;
        }

        if (guess < item) {
            low = middle + 1
        }
    }
    return null;
}