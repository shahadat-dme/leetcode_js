var maxDistToClosest = function(seats) {
    let max = 0, number = 0, person = false
    for(let i=0; i<seats.length; i++){
        if(seats[i] == 1){
            max = person ? Math.max(max, number/2) : Math.max(max, number)
            person = true
            number = 0
        }else{
            number++
        }
    }
    return Math.max(number, max)
};

/*
function maxDistToClosest(seats) {
  let left = seats.indexOf(1);
  let max = left;
  for (let right = left + 1; right < seats.length; right++) {
    if (seats[right] === 0) {
      continue;
    }
    [max, left] = [Math.max(max, ((right - left) / 2) | 0), right];
  }
  return Math.max(max, seats.length - left - 1);
}
*/
console.log(maxDistToClosest([1,0,0,0,1,0,1]))
console.log(maxDistToClosest([1,0,0,0]))