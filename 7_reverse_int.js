/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  let d = x.toString().split("").reverse()

  d = parseInt(d.join(''));
  x = d * Math.sign(x)
  
   if (x >= (2 ** 31 - 1) || x <= -(2** 31)) {
      return 0
  }
  
  return x
};