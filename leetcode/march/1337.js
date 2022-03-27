var kWeakestRows = function(mat, k) {
    let obj = {};
    let res = [];
    mat = mat.map(row => (row.indexOf(0) === -1) ? row.length : row.indexOf(0));
    for (let i = mat.length-1; i >= 0; i--) {
        if (obj[mat[i]]) obj[mat[i]].push(i);
        else obj[mat[i]] = [i];
    }
    mat.sort((a,b) => a-b);
    for (let i = 0; i < k; i++) res.push(obj[mat[i]].pop());
    return res;
    // Time Complexity: O(m*n)
    // Space Complexity: O(m)
};


// const kWeakestRows = (mat, k) => {
//     const m = mat.length;
//     const n = mat[0].length;
//     const ret = [];
//     for (let i = 0; i < m; ++i) {
//       let cur = 0;
//       for (let j = 0; j < n; ++j, ++cur) {
//         if (mat[i][j] === 0) break;
//       }
//       ret.push([cur, i]);
//     }
//     return ret
//       .sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
//       .slice(0, k)
//       .map(item => item[1]);
//   };