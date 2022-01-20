const minEatingSpeed = (piles, h) => {
    let l = 1, r = Math.max(...piles);
    
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        let time = 0;
        for (let pile of piles) time += Math.ceil(pile / mid)
        if (time <= h) r = mid - 1;
        else l = mid + 1;
    }
    return l;
}
console.log(minEatingSpeed([3,6,7,11],8))
console.log(minEatingSpeed([30,11,23,4,20],5))