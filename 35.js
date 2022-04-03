// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
const searchInsert = function(nums, target) {
  if (!nums.includes(target)) {
      nums.push(target)
      nums.sort()
      // console.log(nums)
      return nums.findIndex((num) => num === target)
  }
  
  let middleIndex = Math.trunc(nums.length / 2)
  if (middleIndex === 1) {
      middleIndex = 0;
  }
  console.log(target,nums[middleIndex])
  if (target < nums[middleIndex]) {
      nums = nums.slice(0, middleIndex)
      // console.log("small",nums)
      searchInsert(nums, target)
  } else if (target > nums[middleIndex]) {
      // console.log(middleIndex, nums[middleIndex], target)
      nums = nums.slice(-middleIndex)
      // console.log("bigger", nums)
      searchInsert(nums, target)
  } else if (target === nums[middleIndex]) {
      return middleIndex;
  }

};