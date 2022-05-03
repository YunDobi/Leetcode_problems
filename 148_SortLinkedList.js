//require to review. It has to be O(log n)
const sortList = function(head) {
  let temp = head;
  let result = [];
  let i = 0
  while(temp) {
      result.push(temp.val)
      temp = temp.next
  }
  result.sort((a,b) => a - b)
  temp = head;
  
  while (temp) {
      temp.val = result[i++];
      temp = temp.next;
  };
  return head;
};
