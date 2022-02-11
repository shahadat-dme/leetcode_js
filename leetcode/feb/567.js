const checkInclusion = function (s1, s2) {
	const chars = new Array(26).fill(0),
                a = "a".charCodeAt(0);
	// Create a map of s1 chars
	for (let i = 0; i < s1.length; i++) 
		chars[s1.charCodeAt(i) - a]--;

	for (let i = 0; i < s2.length; i++) {
		// Increase visited char in the map
		chars[s2.charCodeAt(i) - a]++;

		// Continue until s1.length chars are visited
		if (i < s1.length - 1) continue;
		
		// Reset chars exiting the window in the map
		if (i > s1.length - 1) chars[s2.charCodeAt(i - s1.length) - a]--;

		// Check if all map chars are zero
        if(chars.every(v => v == 0)) return true;
	}
    
	return false;
};
/*
function checkInclusion(s1, s2) {
	// Create a map of s1 chars
	const map = new Map();
	for (let i = 0; i < s1.length; i++) 
		map.set(s1[i], map.get(s1[i]) + 1 || 1);

	for (let start = 0, end = s1.length - 1; end < s2.length; start++, end++) {
		// Move window until both start & end chars match
		if (!map.has(s2[start]) || !map.has(s2[end])) continue;

		// Check chars inside the window
		let i = start;
		do {
			map.set(s2[i], map.get(s2[i]) - 1);
			i++;
		} while (i <= end && map.get(s2[i]));

		// Check if all chars were in the window
		if (i > end) return true;

		// Reset the map if any chars in the window didn't match
		for (let j = start; j < i; j++) 
			map.set(s2[j], map.get(s2[j]) + 1);
	}

	return false;
}
*/
/*
var checkInclusion = function(s1, s2) {
    
    var sort = (s) => {
        return s.split('').sort().join('')
    }
    
    s1 = sort(s1)
    for(let i=0; i<=s2.length-s1.length; i++){
        if(s1 == sort(s2.substring(i, i+s1.length))){
            return true
        }
    }
    return false
};
*/