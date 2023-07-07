/* eslint-disable func-style */
/* eslint-disable no-unused-vars */
function diagonalDifference(arr) {
  // Write your code here
  
  let index = 0;
  let sum1 = 0;
  let sum2 = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][index];
    index++;
  }
  
  index--;
  for (let i = 0; i < arr.length; i++) {
    sum2 += arr[i][index];
    index--;
  }
  
  console.log(Math.abs(sum1 - sum2));
  return (Math.abs(sum1 - sum2));
}