/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
  s = s.trim()
  let temp = s.split(" ")
  let result = []
  for (let i = 0; i < temp.length; i++) {
      if (temp[i] !== "") {
          result.push(temp[i])
      }
  }
  return (result.reverse().join(" "))
};