var numTilings = function(n) {
    
    if(n === 1) return 1;
    if(n === 2) return 2;
    if(n === 3) return 5;
    if(n === 4) return 11;
    
    const MOD = BigInt(10) ** BigInt(9) + BigInt(7); // 10^9 + 7
    let prev1 = BigInt(1);
    let prev2 = BigInt(2);
    let prev3 = BigInt(5);
    
    for(let i=4; i<=n; i++){
        const current = BigInt(2) * prev3 + prev1;
        prev1 = prev2;
        prev2 = prev3;
        prev3 = current % MOD;
    }    
    return prev3 % MOD;
};
console.log(numTilings(3))


// var numTilings = function(N) {
//     const mod = 1e9 + 7
//     const cash = new Map([[1,1],[2,2],[3,5]])
//     const count = (n) => {
//       if (!cash.has(n)) cash.set(n, count(n-1)*2 + count(n-3))
//       return cash.get(n) % mod
//     }
//     return count(N)
//   };



// var numTilings = function (n) {
//     let md = 1e9;
//     md += 7;
//     const v = new Array(1001).fill(0);
//     v[1] = 1;
//     v[2] = 2;
//     v[3] = 5;
//     if (n <= 3)
//         return v[n];
//     for (let i = 4; i <= n; ++i) {
//         v[i] = 2 * v[i - 1] + v[i - 3];
//         v[i] %= md;
//     }
//     return v[n];
// };
console.log(numTilings(1))