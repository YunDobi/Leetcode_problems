// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
const majorityElement = function(nums) {
  const halfPoint = Math.floor(nums.length/2)
  const hashTable = {};

  for (let i = 0; i < nums.length; i++) {
      if (Object.keys(hashTable).includes(String(nums[i]))) {
          hashTable[nums[i]] += 1
      } else {
          hashTable[nums[i]] = 1
      }
  }
  const keys = Object.keys(hashTable)
  for (let i = 0; i < keys.length; i++){
      if (hashTable[keys[i]] > halfPoint) {
          return keys[i]
      }
  }

};