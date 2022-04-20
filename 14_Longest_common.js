// const longestCommonPrefix = function(strs) {
//   //return if nothing
//   if (!strs.length) {
//     return '';
//   }
//   //slice down if there is not common
//   for (let i = 0; i < strs[0].length; i++) {
//     for (let s of strs) {
//       if (s[i] !== strs[0][i]) {
//         return s.slice(0, i);
//       }
//     }
//   }
//   return strs[0];
// };

const longestCommonPrefix = function(strs) {
  strs.sort();
  const result = [];
  console.log(strs);

  //it doesnt matter in the middle of the array because it have to include all the strings include the first and last. Als it is sorted
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]) {
      console.log(strs[0]);
      return strs[0].substr(0, i);
    }
        
  }
  return strs[0];
};