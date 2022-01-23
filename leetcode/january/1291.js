const sequentialDigits = (low, high) => {
    const queue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const res = [];
    for (let i = 0; i < queue.length; ++i) {
      const cur = queue[i];
      const last = cur % 10;
      if (last === 9) continue;
      const next = cur * 10 + last + 1;
      if (next > high) continue;
      next >= low && res.push(next);
      queue.push(next);
    }
    return res;
  };
/*
var sequentialDigits = function (low, high) {
    const possiblity = [
      12, 23, 34, 45, 56, 67, 78, 89, 123, 234, 345, 456, 567, 678, 789, 1234,
      2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456,
      234567, 345678, 456789, 1234567, 2345678, 3456789, 12345678, 23456789,
      123456789,
    ];
    const res = [];
    for (let i = 0; i < possiblity.length; i++) {
        if (possiblity[i] < low) continue;
        if (possiblity[i] > high) break;
        res.push(possiblity[i]);
    }
    return res;
  };
*/
/*

// the idea is to generate such sequential digit numbers
// while we are not exceeding given upper limit
const sequentialDigits = (low, high) => {
  const result = [];
  let current = 1;
  let start = 1;
  let increment = 11;

  // for first layer we have 8 numbers: 12,23,34,45,56,67,78,89
  // with every added digit, numbers of combination will reduce by 1 :
  // 123, 234, 345, 456, 567, 678, 789 (7)
  for (let numbersAtLayer = 8; numbersAtLayer > 0; numbersAtLayer--) {
    for (let i = 0; i < numbersAtLayer; i++) {
      current = current + increment;

      if (current >= low && current <= high) {
        result.push(current);
      }
    }

    // 11 -> 111 -> 1111 -> 11111
    increment = increment * 10 + 1;
    // 12 (1 * 10 + 10 - 8) -> 123 (12 * 10 + 10 - 7)
    start = start * 10 + 10 - numbersAtLayer;
    current = start;

    if (current > high) {
      return result;
    }
  }

  return result;
};
*/
console.log(sequentialDigits(100,300))