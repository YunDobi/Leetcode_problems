var leafSimilar = function(root1, root2) {
  let expect1 = []
  let expect2 = []
  recursiveFuc(root1, expect1)
  recursiveFuc(root2, expect2)

  function recursiveFuc (root, expect) {
      if (!root) {
          return 
      }
      if (!root.left && !root.right) {
          expect.push(root.val)  
          return  
      }
      recursiveFuc(root.left, expect)
      recursiveFuc(root.right, expect)
  }
  return expect1.toString() === expect2.toString() ?? true
};