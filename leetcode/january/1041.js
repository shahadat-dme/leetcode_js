function isRobotBounded(instructions) {
	const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
	let [x,y] = [0,0];
    let root = 0;
	
	for (const instruction of instructions) { 
		if (instruction === 'G') {
			x = x + directions[root][0];
			y = y + directions[root][1];
		} else if (instruction === 'L') {
			root = (4 + root - 1) % 4;
		} else {
			root = (4 + root + 1) % 4;
		}
	}
	const isAtOrigin = (x === 0 && y === 0);
	const isHeadingNorth = root === 0

	return isAtOrigin || (! isHeadingNorth);
};