var kClosest = function(points, k) {
    return points.sort((a, b) => getLength(a) - getLength(b)).slice(0, k);
};

// we don't need to find square root of c here
// squared length is enough to determine order
var getLength = function([a, b]) {
    return (a * a) + (b * b);
}

/*
var kClosest = function(points, k) {
  //  distance formula - ((x1-x2)^2 + (y1-y2)^2)
     let map = {}
	 
    // O(nlogn) where n is no of points in input
    for(let point of points) {
        map[point] = Math.sqrt((point[0] - 0)**2 + (point[1] - 0 )**2)
    }

    let result = []

    let sorted = Object.keys(map).sort((a,b) => {
        return map[a] - map[b]
    })

   for(let i=0; i<sorted.length; i++) {
       result.push(sorted[i].split(','))
   }

    return result.slice(0, k)

};
*/