var addDigits = function(num) {
    if(num === 0) return 0;
    return num % 9 || 9;
};

// https://en.wikipedia.org/wiki/Casting_out_nines