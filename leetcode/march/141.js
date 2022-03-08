var hasCycle = function(head) {
    let slow = head, fast = head;
    while (fast !== null) {
        fast = fast.next;
        if (slow == fast) return true;
        
        if (fast == null) break;
        else fast = fast.next;

        if (slow == fast) return true;
        slow = slow.next;
    }
    return false;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};