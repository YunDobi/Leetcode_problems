var maxDepth = function(root) {
  if (!root) {
      return 0
  }
  // console.log(root.val)
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  console.log(left , right)
  // console.log(Math.max(left,right) + 1)
  return Math.max(left, right) + 1
};