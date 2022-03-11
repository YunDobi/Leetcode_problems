/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  //return if nothing
  if (!strs.length) {
    return '';
  }
  //slice down if there is not common
  for (let i = 0; i < strs[0].length; i++) {
    for (let s of strs) {
      if (s[i] !== strs[0][i]) {
        return s.slice(0, i);
      }
    }
  }
  return strs[0];
};