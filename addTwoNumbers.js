/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// currently what I sumbit first. However, if the different length of the array, return short version.
// const addTwoNumbers = function(l1, l2) {
//   let result = [];
//   let sum = 0;
//   let addingResult = function () {
//    if (!l1 || !l2) {
//       return;
//       }
//       let total = l1.val + l2.val + sum
//       // console.log("each",total)
//       l1 = l1.next, l2= l2.next
//       if (total > 9) {
//           result.push(0)
//           sum += 1
//       } else {
//          result.push(total)
//           sum = 0
//       }
//       // console.log(total)
//       addingResult(l1, l2)   
//   }
//   addingResult()
//   console.log(result)
  
  
//   let head = result.reverse().reduce((acc, curr) => {
// if (acc == null) {
//   acc = new ListNode(curr);

// } else {
//   acc = new ListNode(curr, acc);
// }
// return acc;
// }, null);
//   return(head)
  
// };

//fro the sumbition
let carry = 0;

let addTwoNumbers = function(l1, l2) {
    if(!l1 && !l2 && carry === 0) {
        return null;
    }
    
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;
    let nextL1 = l1 ? l1.next : null;
    let nextL2 = l2 ? l2.next : null;
    
    let sum = x + y + carry;

    carry = Math.floor(sum/10);
    sum = sum % 10;
        
    return {
        val: sum,
        next: addTwoNumbers(nextL1, nextL2)
    };
};