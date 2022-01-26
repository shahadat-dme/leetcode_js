var getAllElements = function(root1, root2) {
    var res = [];
    
    // Pre-Order traversal using Depth-First Search
    function dfs(root) {
        if (root == undefined) return;
        res.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root1);
    dfs(root2);
    
    // Sort in increasing order
    res.sort((a, b) => a - b);
    return res;
};

/*
var getAllElements = function(root1, root2) {
    this.list = [];
    collect(root1);
    collect(root2);
    return list.sort((a,b) => a-b);
};

var collect = function(root){
    if(root == null)    return;
    this.list.push(root.val);
    collect(root.left);
    collect(root.right);
}
*/