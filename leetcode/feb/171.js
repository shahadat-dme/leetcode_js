var titleToNumber = function(columnTitle) {
    let ans = 0
	
	// Storing the length will decrease the time but increase memory 
    let len = columnTitle.length
	
    for(let i =0; i< len; i++) {
        ans = ans*26 + columnTitle.charCodeAt(i) - 64
    }
    
    return ans
};