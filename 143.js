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

