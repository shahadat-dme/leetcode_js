var gameOfLife = function(B) {
    let m = B.length, n = B[0].length
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++) {
            let c = -B[i][j]
            for (let k = -1; k < 2; k++)
                for (let l = -1; l < 2; l++)
                    if (B[i+k]?.[j+l] % 2) c++
            if (c > 3 || c < 2) B[i][j] *= 3
            else if (c === 3 && !B[i][j]) B[i][j] = 4
        }
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            B[i][j] %= 3
};