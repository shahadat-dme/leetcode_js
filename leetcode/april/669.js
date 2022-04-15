var trimBST = function(root, low, high) {
    return trim(root, low, high);
    // T.C: O(N)
    // S.C: O(H)
};

function trim(root, low, high) {
    if (!root) {
        return null;
    }
    if (root.val < low) {
        return trim(root.right, low, high);
    }
    if (root.val > high) {
        return trim(root.left, low, high);
    }
    root.left = trim(root.left, low, high);
    root.right = trim(root.right, low, high);
    return root;
}