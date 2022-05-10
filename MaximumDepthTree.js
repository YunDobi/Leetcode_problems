var maxDepth = function(root) {
  if (!root) {
      return 0
  }
  // console.log(root.val, root.right)
  let a = maxDepth(root.right)
  let b = maxDepth(root.left)
  let max = Math.max(a,b)
  // console.log("after:",a,root.val, root.right)
  //because of returning +1, stack the count
  return 1 + max
};