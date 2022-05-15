//this is my solution
const isValidBST = function(root) {
  if (!root) {
      return true
  }
  function isBST(root, min, max) {
      console.log(root, min, max)
      if (!root) {
          return true
      }
      if ((min !== null && min >= root.val) || (max !== null && max <= root.val)) {
          console.log(min, max)
          return false
      }
      return isBST(root.left, min, root.val) && isBST(root.right, root.val, max)
  }
  return isBST(root, null, null)
};

//this is from the description(faster)
const isValidBST = function(root, min=null, max=null) {
  if (!root) return true;
  if (min && root.val <= min.val) return false;
  if (max && root.val >= max.val) return false;
  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};
