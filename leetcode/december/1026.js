var maxAncestorDiff = function(root) {
    function iterate(node, max, min) {
        if(!node) return max - min; 
        
        max = Math.max(max, node.val);
        min = Math.min(min, node.val);
        
        return Math.max(
            iterate(node.left, max, min),
            iterate(node.right, max, min)
        )
    }
    return iterate(root, root.val, root.val);
};


/*
var maxAncestorDiff = function (root) {
    if (!root) return 0;
  
    const traverse = (node, min, max) => {
      if (!node) return 0;
  
      const newMin = Math.min(min, node.val);
      const newMax = Math.max(max, node.val);
  
      const left = traverse(node.left, newMin, newMax);
      const right = traverse(node.right, newMin, newMax);
  
      return Math.max(newMax - newMin, left, right);
    };
  
    return traverse(root, root.val, root.val);
  };
  */