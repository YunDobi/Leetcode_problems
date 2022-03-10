/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  let symbolObj = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };
  let given = s.split("");
  let result = 0;
  for (let i = 0; i < given.length; i++) {
    let letter = given[i];
      
    if (letter === "I") {
      if (given[i + 1] === "V" || given[i + 1] === "X") {
        result += (symbolObj[given[i + 1]] - symbolObj[letter])
        i++;
      } else {
        result += symbolObj[letter]
      }
    }
    if (letter === "C") {
      if (given[i + 1] === "D" || given[i + 1] === "M") {
        result += symbolObj[given[i + 1]] - symbolObj[letter];
        i++;
      } else {
        result += symbolObj[letter];
      }
    }
    if (letter === "X") {
      if (given[i + 1] === "L" || given[i + 1] === "C") {
        result += symbolObj[given[i + 1]] - symbolObj[letter]
        i++;
      } else {
        result += symbolObj[letter];
      }
    }
    if (letter === "V" || letter === "L" || letter === "D" || letter === "M") {
      result += symbolObj[letter];
    }
  }
  return result;
};