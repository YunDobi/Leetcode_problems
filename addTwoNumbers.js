/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */

//currently what I sumbit first. However, if the different length of the array, return short version.
const addTwoNumbers = function(l1, l2) {
  let result = [];
  let sum = 0;
  let addingResult = function () {
   if (!l1 || !l2) {
      return;
      }
      let total = l1.val + l2.val + sum
      // console.log("each",total)
      l1 = l1.next, l2= l2.next
      if (total > 9) {
          result.push(0)
          sum += 1
      } else {
         result.push(total)
          sum = 0
      }
      // console.log(total)
      addingResult(l1, l2)   
  }
  addingResult()
  console.log(result)
  
  
  let head = result.reverse().reduce((acc, curr) => {
if (acc == null) {
  acc = new ListNode(curr);

} else {
  acc = new ListNode(curr, acc);
}
return acc;
}, null);
  return(head)
  
};