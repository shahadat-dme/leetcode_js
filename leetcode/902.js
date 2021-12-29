var atMostNGivenDigitSet = function(digits,n ) {
    digits.sort(function(a, b) {
        return a - b
    })
    let figure = n.toString();
    let goal = 0;
    for (let i = 1; i < figure.length; i++) {
        goal += Math.pow(digits.length, i)
    }
    let i = 0
    while (i < figure.length) {
        let j = 0
        while (j < digits.length && digits[j][0] < figure[i]) {
            goal += Math.pow(digits.length, figure.length - i - 1)
            j++
        }
        if (j == digits.length || digits[j][0] > figure[i]) {
            break
        }
        i++
    }
    if (i == figure.length) {
        goal++
    }
    return goal
};