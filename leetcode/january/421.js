var findMaximumXOR = function(nums) {
    let set = [...new Set(nums)]
if(set.length === 1) return 0
let max = set[0]^set[1]
for(let i = 0;i<set.length;i++){
	for(let j=i+1;j<set.length;j++){
	   max = Math.max(set[i]^set[j], max)
	}   
}
return max
};