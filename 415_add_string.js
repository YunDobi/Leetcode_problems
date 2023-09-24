/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let roop = false;
  let length1 = num1.length -1;
  let length2 = num2.length -1;
  let left = 0;
  let result = []

  while(!roop) {
      if (length1 <= 0 && length2 <= 0) {
          roop = true
      }
      let sum = (Number(num1[length1]) || 0) + (Number(num2[length2]) || 0) + left

      //reset the left after added
      left = sum > 9 ? 1 : 0

      if (sum > 9) {
          sum  = sum % 10;
      }
      // console.log(sum, left)
      result.unshift(sum)
      length1 --;
      length2 --;
  }

  if(left == 1) {
      result.unshift(1)
  }
  return result.join("")
};