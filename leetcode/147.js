var insertionSortList = function(head) {
    let newHead = new ListNode(0)
    while(head){
        const temp = head
        head = head.next
        let current = newHead
        while(current){
            if(!current.next || temp.val <= current.next.val){
                [current.next, temp.next] = [temp, current.next]
                break
            }
            current = current.next
        }
    }
    return newHead.next
};

console.log(insertionSortList([4,2,1,3]))