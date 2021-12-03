function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
var oddEvenList = function(head) {
    if (!head) return head;
    let currentOdd = head;
    let evenHead = head.next;
    let currentEven = evenHead;
    while(currentEven && currentEven.next) {
        currentOdd.next = currentEven.next;
        currentOdd = currentOdd.next;
        currentEven.next = currentOdd.next;
        currentEven = currentEven.next;
    }
    currentOdd.next = evenHead;
    return head;
};



// console.log(oddEvenList([1,2,3,4,5]))
// output = [1,3,5,2,4]