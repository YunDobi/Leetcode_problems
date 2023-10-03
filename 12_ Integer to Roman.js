/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let sym = 'IVXLCDM'
let unit = 0
let res = ''

while (num) {
 let digit = num % 10
 console.log(digit, num, unit)
 
 if (digit < 4) {
     res = sym[unit] + res;
 } else if (digit === 4) {
     res = sym[unit] + sym[unit + 1] + res;
 }
 else if (digit < 9) {
     res = sym[unit + 1] + sym[unit].repeat(digit - 5) + res
 }
 else res = sym[unit] + sym[unit + 2] + res
 
 num = Math.floor(num / 10)
 unit += 2
}

return res
};