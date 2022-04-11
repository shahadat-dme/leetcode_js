const shiftGrid = (grid, k) => {
    // Store the width and the height of the grid
    const [w, h] = [grid[0].length, grid.length];
    // Calculate the total items in the grid
    const t = w * h;
    // Use the total to avoid extraneous whole-grid shifts
    k %= t;
    // Flatten the grid for easy shifting
    const flattened = grid.flat();
    // Shift the grid using slice for speed
    const sFlattened = [...flattened.slice(-k), ...flattened.slice(0, -k)];
    // Make a new two-dimensional shifted grid
    const shifted = []; // The second dimension is added on the next line
    // Store the flat shifted grid in the new two-dimensional shifted grid
    for (let i = 0; i < t; i += w) shifted.push(sFlattened.slice(i, i + w));
    // Return the new two-dimensional shifted grid
    return shifted;
};


// var shiftGrid = function(grid, k) {
//     const flattened = grid.flat()
//     const arrayLength = grid[0].length
//     const result = []
    
//     for(let i=0; i<k; i++) {
//         const lastItem = flattened.pop()
//         flattened.unshift(lastItem)
//     }
    
//     while(flattened.length) {
//         result.push(flattened.splice(0, arrayLength))
//     }
    
//     return result
// };