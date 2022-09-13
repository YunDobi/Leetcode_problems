

//using the hash map(object) to find target - nums[i] = hash's index. This is O(n)
const twoSum = function(nums, target) {
  let hash = {};

for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    // console.log(hash[target - n])
    if (hash[target - n] !== undefined) {
      return [hash[target - n], i];
    }
    hash[n] = i;
    // console.log(hash)
  }
  return [];
};

//Java

class Solution {
  public int[] twoSum(int[] nums, int target) {
      int number = nums.length;
      for (int i = 0; i < number; i++) {
          for(int j = i + 1; j < number; j++) {
              if (nums[i] + nums[j] == target) {
                  return new int[] {i,j};
              }
          }
      }
      return null;
  };
}