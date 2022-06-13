// var minimumTotal = function(triangle) {
//     for (let i = triangle.length-2; i >= 0; i--)
//         for (let j = 0; j < triangle[i].length; j++)
//             triangle[i][j] += Math.min(triangle[i+1][j], triangle[i+1][j+1])
//     return triangle[0][0]
// };

var minimumTotal = function(t) {
    for (let i = t.length-2; i >= 0; i--)
        for (let j = 0; j < t[i].length; j++)
            t[i][j] += Math.min(t[i+1][j], t[i+1][j+1])
    return t[0][0]
}

const tri = minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])
console.log(tri);