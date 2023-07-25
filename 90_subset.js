/* eslint-disable func-style */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b);
  let powerset = [];
  let subset = [];
  permute(0);
  return powerset;
  
  function permute(i) {
    if (i === nums.length) {
      powerset.push(subset.slice());
      // console.log(subset)
      return;
    }
  
    subset.push(nums[i]);
    // console.log("s",subset, i)
    permute(i + 1);
  
    subset.pop();
    // console.log("after s",subset, i)
    while (nums[i] === nums[i + 1]) {
      // console.log("in", nums[i])
      i++;
    }
    permute(i + 1);
  }
};