var reorderList = function(head) {
    let node = head;
    const listOrders = [];
    while(node){
        listOrders.push(node.val);
        node = node.next;
    };
    while(listOrders.length){
        head.val = listOrders.shift()
        if(listOrders.length){
            head = head.next;
            head.val = listOrders.pop();
        }
        head = head.next;
    };
};

// var reorderList = function(head) {
//     if(head == null || head.next == null || head.next.next == null) return;

//     var last = head.next
//     var secondlast = head;

//     while ( last.next != null){
//         last = last.next;
//         secondlast = secondlast.next
//     }
//     var temp = head.next;
//     head.next = last
//     last.next = temp
//     secondlast.next = null;

//     reorderList(temp)
// }
