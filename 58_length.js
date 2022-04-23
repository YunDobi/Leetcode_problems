
const lengthOfLastWord = function(s) {
  let strArray = s.split(" ");
  let counter = 1
  // console.log(strArray)
  // console.log(strArray[strArray.length - 1].length)
  if (strArray.length === 1) {
      return strArray[0].length;
  }
  for (let i = counter; i <= strArray.length; i++) {
      if (strArray[strArray.length - counter].length === 0) {
          console.log(counter)
          counter ++;
      } else {
          result = true;
          return strArray[strArray.length - counter].length;
      };
  }
};