var swapPairs = function (head) {
    let current = head;
    while (current) {
        if (current.next) {
            [current.val, current.next.val] = [current.next.val, current.val];
            current = current.next;
        }
        current = current.next;
    }
    return head;
};