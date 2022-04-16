// recursion
var convertBST = function(root) {
    var pre = 0;
    var travel = function(node) {
        if(!node) return;
        travel(node.right);
        node.val += pre;
        pre = node.val;
        travel(node.left);
    }
    travel(root);
    return root;
};

// stack
var convertBST = function(root) {
    var pre = 0;
    var stack = [];
    var cur = root;
    while(stack.length || cur) {
        if(cur) {
            stack.push(cur)
            cur = cur.right;
        } else {
            cur = stack.pop();
            cur.val += pre;
            pre = cur.val;
            cur = cur.left;
        }
    }
    return root;
};