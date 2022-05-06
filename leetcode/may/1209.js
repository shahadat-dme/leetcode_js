var removeDuplicates = function(s, k) {
    let res = new Array(s.length);
    let duplicateCountStack = [];
    let i = 0, duplicateCount = 1;
    for (let j = 0; j < s.length; j++) {
        res[i] = s[j];
        if (s[j] === res[i-1]) {
            duplicateCount++;
        } else {
            duplicateCountStack.push(duplicateCount);
            duplicateCount = 1;
        }
        if (duplicateCount === k) {
            i -= k;
            duplicateCount = duplicateCountStack.pop();
        }
        i++;
    }
    return res.slice(0, i).join("");
};