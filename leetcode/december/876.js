// var middleNode = function(head) {
//     let A = [head];
//     while (A[A.length - 1].next != null)
//         A.push(A[A.length - 1].next);
//     return A[Math.trunc(A.length / 2)];

// };

var middleNode = function(head) {
    first = middle = head;
    while (first && first.next) {
        first = first.next.next;
        middle = middle.next;
    }
    return middle;
};

/*
var middleNode = function(head) {
    let slow = head, fast = head;
    while (fast !== null) {
        fast = fast.next;
        if (fast == null) break;
        else fast = fast.next;
        
        slow = slow.next;
    }
    return slow;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};
*/