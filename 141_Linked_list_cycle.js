/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  let fast = head
  while (fast && fast.next) {
      // console.log(fast)
      head = head.next;
      fast = fast.next.next;
      if (head === fast) {
          return true
      }
  }
  return false
};