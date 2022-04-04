var swapNodes = function(head, k) {
    if (!head) {
        return null;
    }
    let A = head, B = head;
    for (let i = 1; i < k; i++) {
        A = A.next;
    }
    let firstKNode = A;
    A = A.next;
    
    // A is more advanced than B by k
    // So, when A reaches the end of list, B will be at the node k from the end
    while (A) {
        A = A.next;
        B = B.next;
    }
    // B is at second k-th node
    let firstKVal = firstKNode.val;
    firstKNode.val = B.val;
    B.val = firstKVal;
    return head;
    // T.C: O(N)
    // S.C: O(1)
};