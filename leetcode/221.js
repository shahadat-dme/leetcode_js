var maximalSquare = function(matrix) {
    let maxSquare = [];

    for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[i].length; j++) {
            if(matrix[i][j] == 1) {
                if(i > 0 && j > 0) {
                    matrix[i][j] = Math.min(matrix[i-1][j], matrix[i][j-1], matrix[i-1][j-1]) + 1;
                }
                maxSquare = Math.max(maxSquare, matrix[i][j])
            }
        }
    }
    return maxSquare ** 2
};

console.log(maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"],["1","1","1","1","1"]]))