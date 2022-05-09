var inorderTraversal = function(root) {
    if (!root) {
        return [];
    }
    const left_values  = inorderTraversal(root.left);
    const right_values = inorderTraversal(root.right);

    return [...left_values, root.val, ...right_values];
};






// Iterative Solution
/*
var inorderTraversal = function(root) {
    if (!root) return [];
    let stack = [], res = [];
    stack.push(root);
    while (stack.length) {
        let node = stack[stack.length-1];
        if (node.left) {
            stack.push(node.left);
            node.left = null;
        }
        else {
            res.push(stack.pop().val);
            if (node.right) stack.push(node.right);    
        }
    }
    return res;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};
*/