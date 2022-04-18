

//using the hash map(object) to find target - nums[i] = hash's index. This is O(n)
const twoSum = function(nums, target) {
  let hash = {};

for(let i = 0; i < nums.length; i++) {
const n = nums[i];
    // console.log(hash[target - n])
if(hash[target - n] !== undefined) {
  return [hash[target - n], i];
}
hash[n] = i;
    // console.log(hash)
}
return []
};