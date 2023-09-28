/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2) return false
  console.log(sum)
  const target = sum / 2
  const dp = new Array(nums.length).fill(-1).map(() => new Array(target + 1).fill(-1))

  function dfs(idx, target) {
      if (target === 0) return true;
      if (target < 0) return false;
      if (dp[idx][target] !== -1) {
          return dp[idx][target]
      }
      console.log(dp)

      for (let i = idx + 1; i < nums.length; i++) {
          if (dfs(i, target - nums[idx]) || dfs(i, target)) return true;
      }
      return dp[idx][target] = false;
  }
  return dfs(0, target)

};