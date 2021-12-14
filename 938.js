var rangeSumBST = function(root, low, high) {
    if(root == null){
        return 0;
    }else if (root.val > high){
        return rangeSumBST(root.left, low, high)
    }else if(root.val < low){
        return rangeSumBST(root.right, low, high)
    }
    return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)
};

// const rangeSumBST = (root, low, high) => {
// 	if (root === null) {
//   	    return 0;
//     }    

//     return (root.val >= low && root.val <= high ? root.val : 0) + 
//         rangeSumBST(root.left, low , high) + rangeSumBST(root.right, low , high);
// }



// dfs
// time O(n) space O(1)
/*
var rangeSumBST = function(root, low, high) {
    let sum = 0
    
    function traverse(node) {
        if(!node) {
            return
        }
        
        const value = node.val
        
        if(value >= low && value <= high) {
            sum += value
        }
        
        traverse(node.left)
        traverse(node.right)
    }
    
    traverse(root)
    
    return sum
};
*/


// bfs
// time O(n) space O(n)
/*
var rangeSumBST = function(root, low, high) {
    const stack = [root]
    let sum = 0
    
    while(stack.length) {
        const node = stack.pop()
        const value = node.val
        
        if(value >= low && value <= high) {
            sum += value
        }
        if(node.left) {
            stack.push(node.left)
        }
        if(node.right) {
            stack.push(node.right)
        }
    }
    
    return sum
};
*/