var cherryPickup = function(grid) {
    let rows = grid.length, cols = grid[0].length, 
        dp = [...Array(rows)].map(x => [...Array(cols)].map(y => Array(cols)))
    for (let i = rows - 1; i >= 0; i--)
        for (let j = Math.min(i, cols - 2); j >= 0; j--)
            for (let k = Math.max(cols - i - 1, j + 1); k < cols; k++) {
                let best = 0
                for (let m = -1; m < 2; m++)
                    for (let n = -1; n < 2; n++)
                        best = Math.max(best, ~~dp[i+1]?.[j+m]?.[k+n])
                dp[i][j][k] = grid[i][j] + grid[i][k] + best
            }
    return dp[0][0][cols-1]
};


// var cherryPickup = function(grid) 
// {
//     let rows = grid.length, columns = grid[0].length;
//     const makeBlankLevel = function(cols)
//         {
//             /* 
//                 A level is a triangular array which maps the score from each  combination of robots.
//                 A level for a 3x3 looks like this:
                        
//                 000
//                 0n00
//                 0nn00
//                 nnn00
//                 000000
//                 The crust of 0's arund the outside is used in place of bounds checking.
//                 */
//                 let level = [];
//                 for(let i=0; i<cols+1; i++)
//                 {
//                         let row = Array(i+3);
//                         row[0] = row[i+1] = row[i+2] = 0;
//                         level.push(row);
//                 }
//                 level.push(Array(cols+2).fill(0));
                
//                 return level;
//             };
//         const setLevel = function(curr, row)
//         {
//                 /* Set the local scores for the current level. */
//                 /* Do the diagonals first, where robot 1 and robot 2 choose the same "tree". */
//                 for(let i=1; i<curr.length-1; i++)
//                         curr[i][i] = grid[row][i-1];
//                 for(let i=2; i<curr.length-1; i++)
//                 {
//                         for(let j=1; j<curr[i].length-3; j++)
//                                 curr[i][j] = grid[row][i-1] + grid[row][j-1];
//                 }
//         };
//         const addNextLevel= function(curr,next)
//         {
//                 /* Adds the downstream max values to curr. */
//                 for(let i=1; i<curr.length-1; i++)
//                 {
//                         for(let j=1; j<curr[i].length-2; j++)
//                         {
//                                 /* 
//                                         To each cell, add the max of the 3x3 square encompassing the 
//                                         corresponding cell in the next level.  Might be worth optimizing 
//                                         with a sliding window technique.
//                                 */
//                                 let max = 0;
//                                 for(let row=-1; row<2; row++)
//                                 {
//                                         for(let col=-1; col<2; col++)
//                                                 max = Math.max(max, next[i+row][j+col]);
//                                 }
//                                 curr[i][j] += max;
//                         }
//                 }
//         };
//         /* 
//                 - Initialize the last 2 levels.
//                 - Starting from the 2nd to last level, add the sums from that grid level 
//                 to the maxes from the level below.
//         */
//         let level = makeBlankLevel(columns);
//         let nextLevel = makeBlankLevel(columns);
//         setLevel(nextLevel, rows-1);
//         for(let currLevel = rows-2; currLevel>=0; currLevel--)
//         {
//                 setLevel(level, currLevel);
//                 addNextLevel(level,nextLevel);
//                 [level,nextLevel] = [nextLevel,level];
//         }
//         return nextLevel[nextLevel.length-2][1];      
// };