/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  let result = ""
  let temp = [];
  for (let i = 0; i < strs.length; i++) {
    let word = strs[i].split("")
    for (let j = 0; j < word.length; j++) {
      console.log(word[j])
      temp.push(word[j])
      if (temp.includes(word[j])) {
        result += word[j]
      }
      console.log(result)
    }
  
  }
};