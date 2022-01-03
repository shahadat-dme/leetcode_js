// var findJudge = function(n, trust) {
//     const TrustJudge = new Array(n+1).fill(0);
//     for(let [i,j] of trust) {
//         TrustJudge[i] -= 1
//         TrustJudge[j] += 1
//     }
//     for(let i = 1; i < TrustJudge.length; i++) {
//         if ((n-1) === TrustJudge[i]) {
//             return i;
//         }
//     }
//     return -1
// };

var findJudge = function(n, trust) {
    const TrustJudge = new Array(n+1).fill(0)
    for (const [person, trusted] of trust) {
        TrustJudge[person]--
        TrustJudge[trusted]++
    }
    for (let i = 1; i <= n; i++) {
        if (TrustJudge[i] === n-1)
            return i
    }
    return -1
};

/*
var findJudge = function(n, trust) {
    let TrustJudge = new Array(n + 1).fill(0);
    for (let [a, b] of trust) {
        TrustJudge[a] = TrustJudge[a] - 1;
        TrustJudge[b] = TrustJudge[b] + 1;
    }

    for (let i = 1; i < TrustJudge.length; i++) {
        if (TrustJudge[i] === n - 1) {
            return i
        }
    }
    return -1
};
*/

/*
const findJudge = function (n, trust) {
    let TrustJudge = Array(n).fill(0);
  
    for (let [person, trustedPerson] of trust) {
        TrustJudge[trustedPerson - 1]++;
        TrustJudge[person - 1]--;
    }
  
    return TrustJudge.includes(n - 1) ? TrustJudge.indexOf(n - 1) + 1 : -1;
  };
*/

console.log(findJudge(3,[[1,3],[2,3],[3,1]]))
console.log(findJudge(3,[[1,3],[2,3]]))
console.log(findJudge(2,[[1,2]]))