var numPairsDivisibleBy60 = function(time) {
    let map = new Array(60).fill(0), result = 0, iterate
    for (let i = 0; i < time.length; i++)
    iterate = time[i] % 60, result += map[(60 - iterate) % 60], map[iterate] += 1
    return result
};
console.log(numPairsDivisibleBy60([30,20,150,100,40]))
console.log(numPairsDivisibleBy60([60,60,60]))