var connect = function(root) {
    let ptr = root;
    while(root && root.left){
        let temp = root;
        while(temp) {
            temp.left.next = temp.right;
            temp.right.next = temp.next ? temp.next.left : null;
            temp = temp.next;
        }
        root = root.left;
    }
    return ptr;
}

/*
var connect = function(root) {
    if (root == null) return null;
    next(root.left, root.right);
    return root;
};

function next(L, R) {
    if (L == null || R == null) return;
    
    L.next = R;
    
    next(L.left, L.right);
    next(R.left, R.right);
    next(L.right, R.left);
}
*/