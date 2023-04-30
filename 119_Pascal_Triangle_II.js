// /**
//  * @param {number} rowIndex
//  * @return {number[]}
//  */
var getRow = function(rowIndex) {
  if (rowIndex === 0 ) {
      return [1]
  }
  let result = []

  for (let i = 1; i <= rowIndex; i++) {
      let temp = [...result];
      result = []
      result.push(1)

      for (let j = 1; j < temp.length; j++) {
          result.push(Number(temp[j -1]) + Number(temp[j]))
      }
      tempReuslt = []
      result.push(1)

  }
      return result
};