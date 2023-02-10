/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
  let convertedNum = num.split('');
  for (let i = 0; i < convertedNum.length; i++) {
      switch(convertedNum[i]) {
          case '0': 
              convertedNum.splice(i,1, "0")
              break;
          case "1": 
              convertedNum.splice(i,1, "1")
              break;
          case "6":
              convertedNum.splice(i,1, "9")
              break;
          case "8":
              convertedNum.splice(i,1, "8")
              break;
          case "9":
              convertedNum.splice(i,1, "6")
              break;
          default: 
              convertedNum.splice(i,1, i)
      }
  }
  convertedNum = convertedNum.reverse().join('')
  if (convertedNum === num) {
      return true;
  } else {
      return false;
  }

};