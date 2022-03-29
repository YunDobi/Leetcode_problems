// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
 const removeElement = function(nums, val) {
  const leng = nums.length;
  const resLeng = 0
  for (let i = 0; i < leng; i++) {
    console.log(nums[i], val);
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
      console.log(nums);
    };
  };
  return leng;
  
};