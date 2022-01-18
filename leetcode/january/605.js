// var canPlaceFlowers = (flowerbed, n) => {
//     let current = 0; 
// 	for(var i = 0; i <= flowerbed.length; i++) {
// 		if (i < flowerbed.length && flowerbed[i] == 0) {
// 			current++;
// 			if (i == 0) current++;
// 			if (i == flowerbed.length - 1) current++;
// 		} else {
// 			n -= Math.trunc((current - 1) / 2);
// 			if (n <= 0) return true;
// 			current = 0;
// 		}
// 	}
// 	return false;
// };

var canPlaceFlowers = (flowerbed, n) =>{
    for (let i = 0; i < flowerbed.length && n > 0; i++) {
        if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
        flowerbed[i] = 1;
        n--;
        }
    }
    
    return n === 0
};
console.log(canPlaceFlowers([1,0,0,0,1],1))