var mergeTwoLists = function(list1, list2) {
    let tempNode = new ListNode(0, null);
    let currentNode = tempNode;
    
    while (list1 && list2) {
        if(list1.val < list2.val) {
            currentNode.next = list1;
            list1 = list1.next
        } else {
            currentNode.next = list2;
            list2 = list2.next
        }
        currentNode = currentNode.next;
    }
    currentNode.next = list1 || list2;
    
    return tempNode.next;
};