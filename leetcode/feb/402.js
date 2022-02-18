var removeKdigits = function(num, k) {
    let stack = [];
    let removed = 0;
    
    for(let n of num) {
        while(stack.length && n < stack[stack.length - 1] && removed < k) {
            stack.pop();
            removed++
        }
        stack.push(n);
    }
    
    while(removed < k) {
        stack.pop();
        removed++;
    }
    
    while(stack.length && stack[0] === '0') stack.shift();
    
    return stack.join('') || '0';
};