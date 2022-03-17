var scoreOfParentheses = function(s) {
    let stack = []
    let cur = 0;
    for(let c of s) {
        if(c == '(') {
            stack.push(cur);
            cur = 0;
        } else {
            cur = stack.pop() + Math.max(1, cur*2);
        }
    }
    return cur;
};