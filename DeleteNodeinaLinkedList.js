const deleteNode = function(node) {
  // console.log(node.next.val)
  node.val = node.next.val
  node.next = node.next.next
  
};