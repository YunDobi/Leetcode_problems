// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
 const searchInsert = function(nums, target) {
  const middle = Math.floor(nums.length / 2);
  let offset = 0;
  let result = 0;
  if(target > nums[middle]){
      nums = nums.slice(middle + 1, nums.length)
      result = searchInsert(nums, target);
      offset = middle + 1;
  }
  else if(target < nums[middle]){
      nums = nums.slice(0, middle)
      result = searchInsert(nums, target);
  }
  else if(target === nums[middle]){
      result = middle;
  }
  else{
      result = 0;
  }
  return result + offset;
};