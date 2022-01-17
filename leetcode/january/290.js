var wordPattern = function(pattern, str) {
	var map = {};
	var words = str.split(" ");
	var patt = pattern.split("");
	var container = [];

	if(words.length !== patt.length) return false;

	for(var i = 0; i < patt.length; i++) {
		if(map.hasOwnProperty(patt[i])) {
			if(map[patt[i]] !== words[i]) {
				return false;
			} else {
				continue;
			}
		} else {
			if(!container.some(function(item){ return item === words[i];})) {
				map[patt[i]] = words[i];
				container.push(words[i])
			} else {
				return false;
			}
		}
	}
	return true;
};