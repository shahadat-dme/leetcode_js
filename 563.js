// var findTilt = function (root) {
//     let res = 0;
//     const traverse = (node) => {
//       if (!node) return 0;
//       const left = traverse(node.left);
//       const right = traverse(node.right);
//       res += Math.abs(left - right);
  
//       return node.val + left + right;
//     };
  
//     traverse(root);
  
//     return res;
//   };
// console.log(findTilt([21,7,14,1,1,2,2,3,3]))



class Node
{
    constructor(data) {
    this.left = null;
    this.right = null;
    this.val = data;
    }
}

let tilt = 0;

function traverse(root)
{
    if (root == null)
        return 0;

    // Compute tilts of left and right subtrees
    // and find sums of left and right subtrees
    let left = traverse(root.left, tilt);
    let right = traverse(root.right, tilt);

    // Add current tilt to overall
    tilt += Math.abs(left - right);

    // Returns sum of nodes under current tree
    return left + right + root.val;
}


function Tilt(root)
{
    traverse(root);
    return tilt;
}


function newNode(data)
{
    let temp = new Node(data);
    return temp;
}



let root = null;
root = newNode(4);
root.left = newNode(2);
root.right = newNode(9);
root.left.left = newNode(3);
root.left.right = newNode(8);
root.right.right = newNode(7);
console.log("The Tilt of whole tree is " + Tilt(root));


